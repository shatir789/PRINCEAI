export default {
  name: 'auto-reaction',
  description: 'Reacts to emoji messages automatically',
  type: 'all',
  async handler(m, { conn }) {
    // Ignore if it's already a reaction message
    if (!!m.message?.reactionMessage) return;

    const messageText =
      m?.body || m?.text || m?.caption || m?.message?.conversation || '';

    // Ignore empty or number-only messages
    if (!messageText.trim() || /^[\d\s]+$/.test(messageText)) return;

    const emojiRegex = /\p{Extended_Pictographic}/gu;
    const allEmojis = messageText.match(emojiRegex);

    if (allEmojis && allEmojis.length > 0) {
      const lastEmoji = allEmojis[allEmojis.length - 1];

      try {
        await m.react(lastEmoji);
        console.log(`[✅ Reacted with]: ${lastEmoji}`);
      } catch (err) {
        console.log(`[❌ Failed to react with "${lastEmoji}"]: ${err.message}`);
      }
    }
  },
};
