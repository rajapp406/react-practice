export 
function Record({ row, onClick }: any) {
  return (
    <tr>
      {row.map((item: any, index: any) => {
        return (
          <td
            onClick={() => onClick(index)}
            key={index + 1}
            style={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
              textAlign: "center",
              fontSize: "60px",
              pointerEvents: !!item
                ? "none"
                : ("cursor" as React.CSSProperties["pointerEvents"]),
            }}
          >
            {item}
          </td>
        );
      })}
    </tr>
  );
}