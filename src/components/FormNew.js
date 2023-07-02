export default function FormNew({ onOpenModal }) {
  return (
    <>
      <button onClick={onOpenModal} className="button button-add-new">
        + Item
      </button>
    </>
  );
}
