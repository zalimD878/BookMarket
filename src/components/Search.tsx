interface Props {
  handleClick(text: string, page: number): Promise<void>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  page: number;
}
export function Search({ handleClick, text, setText, page }: Props) {
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="type author, book name..."
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => handleClick(text, page)}
        disabled={text ? false : true}
      >
        OK
      </button>
    </div>
  );
}
