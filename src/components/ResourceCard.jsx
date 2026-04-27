import { useState } from 'react';

function ResourceCard({ title, level, format }) {
  // ПОЧЕМУ мы храним состояние (isInCollection и note) здесь, внутри компонента, а не передаем через props?
  // Ответ: Props приходят "сверху" от родителя и предназначены только для чтения (их нельзя менять). 
  // А добавление в подборку и ввод текста — это локальные действия самого пользователя внутри конкретной карточки. 
  // Для таких изменений, которые происходят прямо здесь и сейчас, мы обязаны использовать собственный state компонента.
  const [isInCollection, setIsInCollection] = useState(false); 
  const [note, setNote] = useState(''); 

  return (
    <div 
      style={{ 
        border: '1px solid #ddd', 
        padding: '20px', 
        margin: '15px auto', 
        maxWidth: '500px', 
        borderRadius: '12px',
        backgroundColor: isInCollection ? '#f0fdf4' : 'white', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)', 
        textAlign: 'left' 
      }}
    >
      {/* Шапка карточки */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: '#111827' }}>
          {title} {isInCollection ? '📁' : ''}
        </h3>
        
        <button 
          onClick={() => setIsInCollection(!isInCollection)}
          style={{ 
            padding: '8px 12px', 
            cursor: 'pointer', 
            borderRadius: '8px', 
            border: 'none',
            backgroundColor: isInCollection ? '#dcfce7' : '#f3f4f6',
            color: isInCollection ? '#166534' : '#374151',
            fontWeight: 'bold',
            transition: '0.2s'
          }}
        >
          {isInCollection ? 'Added' : '+ Add'}
        </button>
      </div>

      {/* Информация об уроке */}
      <p style={{ fontSize: '14px', color: '#4b5563', marginTop: '15px' }}>
        <strong>Level:</strong> {level} <br/>
        <span style={{ display: 'inline-block', marginTop: '5px' }}>
          <strong>Format:</strong> {format}
        </span>
      </p>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />

      {/* Блок с комментарием */}
      <div>
        <input 
          type="text" 
          placeholder="Write a personal note here..." 
          value={note}
          onChange={(event) => setNote(event.target.value)} 
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '8px', 
            border: '1px solid #d1d5db',
            boxSizing: 'border-box',
            outline: 'none'
          }}
        />
        
        {/* Вывод заметки (показывается только если note не пустой) */}
        {note !== '' && (
          <div style={{ 
            marginTop: '10px', 
            padding: '10px 15px', 
            backgroundColor: '#f9fafb', 
            borderLeft: '4px solid #3b82f6', 
            borderRadius: '4px',
            fontSize: '14px',
            color: '#374151'
          }}>
            <strong style={{ color: '#3b82f6' }}>📝 Note:</strong> {note}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResourceCard;
