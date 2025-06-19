module.exports = async function autoReact(m) {
  try {
    const isReact = !!m.message?.reactionMessage;
    if (isReact) return;

    const messageText =
      m?.body || m?.text || m?.caption || m?.message?.conversation || '';

    if (!messageText.trim() || /^[\d\s]+$/.test(messageText)) return;

    const emojiRegex = /\p{Extended_Pictographic}/gu;
    const allEmojis = messageText.match(emojiRegex);

    if (allEmojis && allEmojis.length > 0) {
      const lastEmoji = allEmojis[allEmojis.length - 1];
      await m.react(lastEmoji);
      console.log(`[✅ Reacted]: ${lastEmoji}`);
    }
  } catch (e) {
    console.log('[❌ Reaction Failed]:', e.message);
  }
};
