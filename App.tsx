import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import styles from './AppStyle';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const App: FC = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const configureNewGameHandler = (): void => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber: number): void => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds: number): void => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
