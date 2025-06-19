module.exports = async function autoReaction(m, conn) {
  const autoReactionSetting = process.env.AutoReaction?.toLowerCase();

  if (autoReactionSetting !== 'sameemoji') return;

  if (!!m.message?.reactionMessage) return;

  const messageText =
    m?.body || m?.text || m?.caption || m?.message?.conversation || '';

  if (!messageText.trim() || /^[\d\s]+$/.test(messageText)) return;

  const emojiRegex = /\p{Extended_Pictographic}/gu;
  const allEmojis = messageText.match(emojiRegex);

  if (!allEmojis || allEmojis.length === 0) return;

  const lastEmoji = allEmojis[allEmojis.length - 1];

  try {
    await m.react(lastEmoji);
    console.log(`[✅ Reacted with]: ${lastEmoji}`);
  } catch (err) {
    console.log(`[❌ Failed to react with "${lastEmoji}"]: ${err.message}`);
  }
};
