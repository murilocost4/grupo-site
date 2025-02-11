import Button from "../components/Button";

export default function Home() {
  return (
    <div className="flex">
      <Button to="/saude" color="bg-slate-50 hover:brightness-95">
        Saúde
      </Button>
      <Button to="/luto" color="bg-slate-100 hover:brightness-95">
        Luto
      </Button>
    </div>
  );
}