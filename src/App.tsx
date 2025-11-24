import React from 'react';
import Card from './components/Card';
import './App.css';

// Используем абсолютные пути к изображениям из public папки
const cardImage1 = "images/card1.jpg";
const cardImage2 = "images/card2.jpg";
const cardImage3 = "images/card3.jpg";

const App: React.FC = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-5 text-center">Bootstrap 5 Карточки - Примеры</h1>
      
      <div className="row g-4">
        {/* Карточка с изображением и кнопкой */}
        <div className="col-md-4">
          <Card
            imageUrl={cardImage1}
            imageAlt="Card image"
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            buttonText="Go somewhere"
          />
        </div>

        {/* Карточка только с текстом */}
        <div className="col-md-4">
          <Card
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>

        {/* Карточка со списком */}
        <div className="col-md-4">
          <Card
            listItems={['An item', 'A second item', 'A third item']}
          />
        </div>

        {/* Карточка с заголовком и списком */}
        <div className="col-md-4">
          <Card
            header="Featured"
            listItems={['An item', 'A second item', 'A third item']}
          />
        </div>

        {/* Карточка с заголовком и футером */}
        <div className="col-md-4">
          <Card
            header="Заголовок"
            title="Особая карточка"
            text="Карточка с заголовком и нижним колонтитулом."
            footer="2 дня назад"
          />
        </div>

        {/* Карточка с цветным фоном */}
        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Цветная карточка</h5>
              <p className="card-text">Пример карточки с цветным фоном и белым текстом.</p>
              <a href="#" className="btn btn-light">Действие</a>
            </div>
          </div>
        </div>
      </div>

      {/* Горизонтальная карточка */}
      <div className="row mt-4">
        <div className="col-md-8">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <img 
                  src={cardImage2} 
                  className="img-fluid rounded-start h-100 object-fit-cover" 
                  alt="Horizontal card" 
                  style={{objectFit: 'cover', height: '100%'}}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Горизонтальная карточка</h5>
                  <p className="card-text">Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому.</p>
                  <p className="card-text"><small className="text-muted">Последнее обновление 3 минуты назад</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Группа карточек */}
      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-4">Группа карточек</h2>
          <div className="card-group">
            <Card
              imageUrl={cardImage1}
              title="Карточка 1"
              text="Это карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому."
            />
            <Card
              imageUrl={cardImage2}
              title="Карточка 2"
              text="Эта карточка имеет поддерживающий текст ниже как естественный переход к дополнительному содержимому."
            />
            <Card
              imageUrl={cardImage3}
              title="Карточка 3"
              text="Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;