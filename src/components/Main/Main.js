export default function Main({ children }) {
  return (
    <div
      style={{
        backgroundColor: "9932cc",
        height: 1000,
        textAlign: "center",
        fontSize: 100,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}
