import { useNavigate } from 'react-router-dom';

import {
  DirectoryListItem,
  DirectoryItemImage,
  DirectoryItemContent,
  DirectoryItemLink,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { src, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryListItem role="listitem">
      <DirectoryItemLink 
        onClick={onNavigateHandler} 
        role="link" 
        tabIndex="0"
      >
        <DirectoryItemImage src={src} alt={`zdjęcie ${title}`} />
          <DirectoryItemContent>
            <h2>{title}</h2>
            <span>PRZEJDŹ DO PRODUKTÓW</span>
        </DirectoryItemContent>
      </DirectoryItemLink>
    </DirectoryListItem>
  );
};

export default DirectoryItem;