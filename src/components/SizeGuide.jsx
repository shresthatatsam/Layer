// const rows = [
//   ['XS', '40', '26', '23'],
//   ['S', '42', '27', '24'],
//   ['M', '44', '28', '25'],
//   ['L', '46', '29', '26'],
//   ['XL', '48', '30', '27']
// ]

// export default function SizeGuide() {
//   return (
//     <div className="size-guide">
//       <div className="size-table-wrap">
//         <table>
//           <thead><tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th><th>Sleeve (in)</th></tr></thead>
//           <tbody>{rows.map(row => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{cell}</td>)}</tr>)}</tbody>
//         </table>
//         <p className="fine-print">Illustrative measurements only. Confirm your final garment measurements before publishing.</p>
//       </div>
//       <div className="fit-note"><span className="fit-number">01</span><h3>Made to feel easy.</h3><p>Choose your usual size for a relaxed silhouette. Prefer a closer fit? Consider sizing down.</p></div>
//     </div>
//   )
// }

const rows = [
  // ['XS', '40', '26', '23'],
  // ['S', '42', '27', '24'],
  ['M', '44', '28', '25'],
  ['L', '46', '29', '26'],
  ['XL', '48', '30', '27']
]

export default function SizeGuide() {
  return (
    <div className="size-guide">
      <div className="size-table-wrap">
        <table>
          <thead>
            <tr><th>Size</th><th>Chest (in)</th><th>Length (in)</th><th>Sleeve (in)</th></tr>
          </thead>
          <tbody>
            {rows.map(row => (
              <tr key={row[0]}>
                {row.map((cell, i) => <td key={i}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="fine-print">Illustrative measurements only. Confirm your final garment measurements before publishing.</p>
        <a href="#size-guide-detail" className="outline-btn">VIEW DETAILED SIZE GUIDE →</a>
      </div>

      <div className="fit-note">
        <span className="fit-number">01</span>
        <h3>Made to feel easy.</h3>
        <p>Choose your usual size for a relaxed silhouette. Prefer a closer fit? Consider sizing down.</p>
      </div>
    </div>
  )
}