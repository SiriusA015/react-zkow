import DirectoryItem from '../directory-item/directory-item.component';

import { 
  DirectoryContainer, 
  DirectoryTitleWrapper, 
  DirectoryLeft, 
  DirectoryRight,
  DirectoryListItems
} from './directory.styles';
import Plants from '../../assets/plants.png'

const categories = [
  {
    id: 1,
    title: 'ziemia',
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    route: 'sklep/ziemia',
  },
  {
    id: 2,
    title: 'DONICE',
    src: 'https://images.unsplash.com/photo-1528789386055-75c4b717bad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    route: 'sklep/donice',
  },
  {
    id: 3,
    title: 'akcesoria',
    src: 'https://images.unsplash.com/photo-1589945341601-e9e036a35493?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    route: 'sklep/akcesoria',
  },
  {
    id: 4,
    title: 'Rośliny',
    src: 'https://images.unsplash.com/photo-1680677463262-4e2b0ffc7f93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80',
    route: 'sklep/rosliny',
  },
  {
    id: 5,
    title: 'sadzonki',
    src: 'https://images.unsplash.com/photo-1659683705445-462189a7d2f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80',
    route: 'sklep/sadzonki',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      <DirectoryTitleWrapper>
        <DirectoryLeft>
          <h1>Raj dla miłośników roślin</h1>
          <p>Wprowadź do swojej przestrzeni rośliny i poczuj połączenie z naturą.</p>
        </DirectoryLeft>
        <DirectoryRight>
          <img src={Plants} alt ="ilustracja roślin"/>
        </DirectoryRight>
      </DirectoryTitleWrapper>
      <DirectoryListItems role="list">
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryListItems>
    </DirectoryContainer>
  );
};

export default Directory;