interface Props {
  handleClick(text: string): Promise<void>;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}
export function Search({ handleClick, text, setText }: Props) {
  return (
    <div>
      <input
        value={text}
        type="text"
        placeholder="type author, book name..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => handleClick(text)}>OK</button>
    </div>
  );
}
