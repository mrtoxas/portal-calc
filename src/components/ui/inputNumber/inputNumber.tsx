// import { useCallback, useRef } from "react";
// import styles from "./inputNumber.module.css";
// import { StepButton } from "../input/stepButton";
// import { Button } from "../button/button";
// import IconPlus from "../icons/iconPlus";

// interface InputNumberProps {
//   name: string;
//   value: number | null;

//   onChange: (newValue: number | null) => void;
//   onReset: () => void;
//   min?: number;
//   max?: number;
//   label: string;
//   quicklyValues?: { name: string; value: number }[];
//   placeholder?: string;
//   defaultValue?: number | null;
// }

// export const InputNumber = ({
//   name,
//   value,
//   min,
//   max,
//   label,
//   quicklyValues,
//   placeholder = "",
//   defaultValue,
//   onChange,
//   onReset,
// }: InputNumberProps) => {
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = e.target.value;
//     if (!/^-?\d*[.,]?\d*$/.test(inputValue)) {
//       return;
//     }
//     onChange(Number(inputValue));
//   };

//   const resetHandler () => {
//     onChange(defaultValue);
//   }

//   return (
//     <div className={styles.wrapper}>
//       <label htmlFor={name} className={styles.label}>
//         {label}
//       </label>
//       <div className={styles.inputRow}>
//         <div className={styles.inputNumber}>
//           {/* <StepButton direction="dec" onStep={stepHandler} /> */}

//           <div className={styles.inputContainer}>
//             <input
//               id={name}
//               name={name}
//               type="text"
//               className={styles.input}
//               value={value || ""}
//               onChange={handleChange}
//               placeholder={placeholder}
//               min={min}
//               max={max}
//               inputMode="numeric"
//             />

//             {value && value > 0 && (
//               <button
//                 type="button"
//                 className={styles.clearBtn}
//                 onClick={resetHandler}
//               >
//                 <IconPlus />
//               </button>
//             )}
//           </div>

//           {/* <StepButton direction="inc" onStep={stepHandler} /> */}
//         </div>

//         {quicklyValues && quicklyValues.length > 0 && (
//           <div className={styles.quicklyValues}>
//             {quicklyValues.map((item) => (
//               <Button key={item.name} onClick={() => onChange(item.value)}>
//                 {item.name}
//               </Button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // const stepHandler = (dir: "inc" | "dec") => {
// //     if (!inputRef.current) return;

// //     if (dir === "inc") {
// //       inputRef.current.stepUp();
// //     } else {
// //       inputRef.current.stepDown();
// //     }

// //     onChange(
// //       inputRef.current.value === "" ? null : Number(inputRef.current.value)
// //     );
// //   };

// //   const resetHandler = () => {
// //     onReset();
// //   };

// //   const changeHandler = (raw: string) => {
// //     if (raw === "") {
// //       onChange(null);
// //     } else {
// //       onChange(Number(raw));
// //     }
// //   };
