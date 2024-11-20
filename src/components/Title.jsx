export default function Title(props) {
  return (
    <h1 {...props} className="text-slate-100 text-3xl font-bold text-center">
      {props.children}
    </h1>
  );
}
