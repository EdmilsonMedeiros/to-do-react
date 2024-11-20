export default function Button(props) {
  return (
    <button className="bg-slate-400 rounded-md p-2 text-white" {...props}>
      {props.children}
    </button>
  );
}
