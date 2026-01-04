import { GoogleGenAI, Type } from "@google/genai";

export async function generateSharkTankCase(userInput: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const prompt = `
    Eres un asesor académico de debate económico para DALE Philanthropy. 
    Basado en la siguiente idea de negocio de un estudiante: "${userInput}", 
    genera un "Boletín de Caso" estructurado para un debate escolar (formato Shark Tank Académico).
    El boletín debe incluir:
    1. Resumen del Proyecto.
    2. 3 Puntos Críticos (Desafíos de viabilidad).
    3. 3 Preguntas de "Tiburón" (Para que los evaluadores interroguen).
    4. El impacto social esperado.
    Mantenlo en español, con un tono motivador pero crítico.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            resumen: { type: Type.STRING },
            puntosCriticos: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            preguntasTiburon: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            impactoSocial: { type: Type.STRING }
          },
          required: ["resumen", "puntosCriticos", "preguntasTiburon", "impactoSocial"]
        }
      }
    });

    return JSON.parse(response.text ?? "{}");
  } catch (error) {
    console.error("Error generating case:", error);
    throw error;
  }
}

export async function analyzeBusinessStrategy(businessDetails: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const prompt = `
    Eres un consultor senior de negocios y mentor en DALE Philanthropy. 
    Analiza la siguiente estrategia o negocio (existente o nuevo): "${businessDetails}".
    Tu objetivo es generar un informe de debate sobre su VIABILIDAD ESTRATÉGICA.
    El informe debe contener:
    1. Diagnóstico de la Estrategia (¿Qué están haciendo bien/mal?).
    2. Análisis de "Vale la Pena" (¿Es rentable/sostenible a largo plazo?).
    3. 3 Riesgos de Ejecución.
    4. 2 Estrategias de Mejora Inmediata.
    Mantenlo en español, profesional y altamente descriptivo para estudiantes de secundaria/universidad.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            diagnostico: { type: Type.STRING },
            veredictoViabilidad: { type: Type.STRING },
            riesgos: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            mejoras: { 
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["diagnostico", "veredictoViabilidad", "riesgos", "mejoras"]
        }
      }
    });

    return JSON.parse(response.text ?? "{}");
  } catch (error) {
    console.error("Error analyzing strategy:", error);
    throw error;
  }
}