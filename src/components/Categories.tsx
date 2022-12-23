import { v4 as uuidv4 } from 'uuid';

const categories: string[] = ['All', 'planners', 'notebooks', 'sketchbooks'];

type CategoriesProps = {
  categoryId: number;
  onChangeCategory: (i: number) => void;
};

export const Categories: React.FC<CategoriesProps> = ({
  categoryId,
  onChangeCategory,
}) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((el, i) => (
          <li
            key={uuidv4()}
            onClick={() => onChangeCategory(i)}
            className={categoryId === i ? 'active' : ''}
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
