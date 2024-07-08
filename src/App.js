import React from 'react';

// Buttonコンポーネントを作成
const Button = () => {
  const handleClick = () => {
    alert('ボタンがクリックされました！');
  };

  return (
    <button onClick={handleClick}>詳細画面のボタン</button>
  );
};

const App = () => {
  return <Button />;
};

export default App;