// import {useState} from "react";

// export const useSubmit = (callback:(...args:any[])=>{}) => {
//     const [isPending, setIsPending] = useState(false);
//     const [error, setError] = useState('');

//     const submit = async (...args:any[]) => {
//         try {
//             setIsPending(true)
//             await callback(...args)
//         } catch (e) {
//             const msg = e?.message;
//             setError(msg);
//         } finally {
//             setIsPending(false)
//         }
//     }

//     return [submit, isPending, error]
// }
export const antiError = () => {}