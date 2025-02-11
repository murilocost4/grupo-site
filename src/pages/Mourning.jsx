import Button from "../components/Button";

export default function Mourning() {
  return (
    <div className="flex">
      <Button to="/funeraria" color="bg-slate-50 hover:brightness-95">
        Funerária Costa
      </Button>
      <Button to="/memorial" color="bg-slate-100 hover:brightness-95">
        Memorial da Paz
      </Button>
      <Button to="/capela" color="bg-slate-50 hover:brightness-95">
        Capela Santo Antônio
      </Button>
    </div>
  );
}