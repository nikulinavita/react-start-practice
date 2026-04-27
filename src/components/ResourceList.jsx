import ResourceCard from './ResourceCard';

// ПОЧЕМУ мы вынесли список в отдельный компонент?
// Ответ: Чтобы не захламлять App.js. Декомпозиция. ResourceList отвечает только за перебор массива и логику пустого списка, а карточка — только за дизайн.
function ResourceList({ materials }) {
  
  if (materials.length === 0) {
    return <h3 style={{ textAlign: 'center', color: 'red' }}>Данные отсутствуют / No materials found 📭</h3>;
  }

  return (
    <div className="resource-list">
      {materials.map((item) => (
        <ResourceCard
          key={item.id} 
          title={item.title}
          level={item.level}
          format={item.format}
        />
      ))}
    </div>
  );
}

export default ResourceList;