import { GoogleGenAI } from '@google/genai';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    const ai = new GoogleGenAI({ apiKey });
    const { message, history = [] } = req.body;

    const contents = history.map((msg: any) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    
    // Add the current message
    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: "Sen Hümeyra Değirmenci'nin kişisel yapay zeka asistanısın. Hümeyra, Üsküdar Üniversitesi İletişim Fakültesi Yeni Medya ve İletişim bölümünde öğrencidir. Asiye Ağaoğlu Anadolu Lisesi mezunudur. Kızılay'da başkanlık yapmaktadır ve eğitimler, etkinlikler, sosyal sorumluluk projeleri yürütmektedir. Medya alanında dijital tasarım ve sosyal medya hesap yönetimi yapmaktadır. Ziyaretçilerin Hümeyra hakkında sorduğu sorulara kibar, profesyonel, samimi ve kısa cevaplar ver. Sadece Hümeyra'nın CV'si, yetenekleri ve projeleri hakkında konuş. Bilmediğin bir şey sorulursa, 'Bu konuda kesin bir bilgim yok, dilerseniz iletişim bölümünden kendisine doğrudan ulaşabilirsiniz.' de.",
      }
    });

    res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("API Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
