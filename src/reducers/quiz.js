import { createSlice } from "@reduxjs/toolkit";

const questions = [
  {
    id: 1,
    questionText: "What is one major environmental impact of traditional clothing production methods?",
    options: ["Soil erosion", "Air pollution", "Noise pollution", "Deforestation"],
    correctAnswerIndex: 1,
    correctAnswerExplanation: "Traditional clothing production, especially in factories, involves processes like dyeing and finishing, which release pollutants into the air, contributing to air pollution."
  },
  {
    id: 2,
    questionText: "Which of the following materials is known to have a lower environmental impact in terms of water usage in its production?",
    options: ["Cotton", "Polyester", "Hemp", "Nylon"],
    correctAnswerIndex: 2,
    correctAnswerExplanation: "Hemp requires significantly less water compared to traditional cotton during cultivation, making it a more water-efficient and environmentally friendly choice."
  },
  {
    id: 3,
    questionText: "Fast fashion is associated with:",
    options: ["Sustainable practices", "Slow manufacturing", "Mass production and overconsumption", "High-quality craftsmanship"],
    correctAnswerIndex: 2,
    correctAnswerExplanation: "Fast fashion is characterized by the rapid production of inexpensive, trendy clothing, often leading to mass production, overconsumption, and increased waste."
  },
  {
    id: 4,
    questionText: 'What does the term "upcycling" refer to in the context of clothing production?',
    options: ["Breaking down old clothes for recycling", "Reusing old clothing to create new items", "Using sustainable fabrics in production", "High-speed production processes"],
    correctAnswerIndex: 1,
    correctAnswerExplanation: "Upcycling involves transforming old or discarded clothing into new and often higher-value items, reducing waste and promoting sustainability."
  },
  {
    id: 5,
    questionText: "Which greenhouse gas is commonly emitted during the production of synthetic fabrics?",
    options: ["Carbon dioxide (CO2)", "Methane (CH4)", "Nitrous oxide (N2O)", "Sulfur hexafluoride (SF6)"],
    correctAnswerIndex: 0,
    correctAnswerExplanation: "The production of synthetic fabrics, such as polyester, releases carbon dioxide, contributing to the greenhouse gas effect and climate change."
  },
  {
    id: 6,
    questionText: "What is the purpose of the Higg Index in the fashion industry?",
    options: ["Measure social media impact", "Evaluate sustainability performance", "Determine clothing size", "Assess garment comfort"],
    correctAnswerIndex: 1,
    correctAnswerExplanation: "The Higg Index is a tool used to assess and measure the environmental and social impacts of apparel and footwear products, helping companies evaluate and improve their sustainability practices."
  },
  {
    id: 7,
    questionText: "What is a key benefit of choosing second-hand clothing over new clothing in terms of environmental impact?",
    options: ["Reduced waste", "Increased water usage", "Higher energy consumption", "Faster fashion trends"],
    correctAnswerIndex: 0,
    correctAnswerExplanation: "Buying second-hand clothing extends the lifespan of garments, reducing the overall demand for new production and minimizing the environmental impact associated with manufacturing and disposal."
  },
  {
    id: 8,
    questionText: 'What is "circular fashion" aiming to achieve?',
    options: ["Linear production processes", "Reducing garment lifespan", "Continuous recycling and reusing of materials", "Disposable fashion culture"],
    correctAnswerIndex: 2,
    correctAnswerExplanation: "Circular fashion promotes a sustainable model where materials are continuously recycled and reused, reducing the need for new resources and minimizing waste."
  },
  {
    id: 9,
    questionText: "Which country is the largest exporter of textiles and clothing globally?",
    options: ["China", "United States", "India", "Brazil"],
    correctAnswerIndex: 0,
    correctAnswerExplanation: "China is a major global exporter of textiles and clothing, playing a significant role in the international fashion and textile industry."
  },
  {
    id: 10,
    questionText: "What role does the fashion industry play in contributing to climate change?",
    options: ["Minimizes carbon footprint", "Promotes environmental conservation", "Encourages sustainable practices", "Contributes to pollution and resource depletion"],
    correctAnswerIndex: 3,
    correctAnswerExplanation: "The fashion industry, through various production processes and practices, contributes to environmental pollution, depletion of natural resources, and climate change."
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState;
    }
  }
});
