export default function FormNew({ onOpenModal }) {
  return (
    <>
      <button onClick={onOpenModal} className="button">
        Add new item
      </button>
    </>
  );
}
