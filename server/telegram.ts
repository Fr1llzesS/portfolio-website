interface TelegramMessage {
  name: string;
  subject: string;
  message: string;
}

export async function sendTelegramMessage(params: TelegramMessage): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram credentials not found');
    return false;
  }

  const text = `
🔔 *Новое сообщение с портфолио*

👤 *Имя:* ${params.name}
📧 *Тема:* ${params.subject}

💬 *Сообщение:*
${params.message}

---
📅 ${new Date().toLocaleString('ru-RU')}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown'
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Telegram API error:', error);
    return false;
  }
}