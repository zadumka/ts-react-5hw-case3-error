import css from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onSearch: (searchText: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      // Помилка: відсутній атрибут value, що робить компонент неконтрольованим
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
