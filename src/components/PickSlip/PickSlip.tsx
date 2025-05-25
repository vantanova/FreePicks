import Card from "../Card/Card";

function PickSlip() {
  return (
    <Card
      title={
        <>
          <div className="font-bold text-white rounded-full bg-primary flex items-center justify-center font-mono w-6">
            0
          </div>
          <p>Pick Slip</p>
        </>
      }
      className="bg-stone-800 text-white min-w-full min-h-50"
    >
      <p className="text-sm m-auto">No current picks</p>
    </Card>
  );
}

export default PickSlip;
