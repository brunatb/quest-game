import { InputHTMLAttributes } from "react";
import "@fontsource/poppins/700.css";

export function InputAlt({icon ,  ...props} : Props){
    return(
        <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-black">
            {icon}
          </span>
        )}
        <input
          className=" text-blue-950 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 outline-none shadow-inner"
          {...props}
        />
      </div>
    );
}





//export function InputAlt({ icon, label, ...props }: Props) {
  //return (
    //<>
      //{label && (
        //<label className="flex items-center mb-2 font-poppins text-blue-950 font-extrabold text-left">
          //{label}
        //</label>
      //)}
      //<div className="flex text-foreground">
        //{icon && (
          //<span className="inline-flex items-center px-3 text-sm border border-black rounded-e-0 rounded-s-md bg-transparent">
            //{icon}
          //</span>
        //)}
        //<input
          //className={`border-black block flex-1 min-w-0 w-full text-smd p-2.5 outline-none ${
            //icon ? "rounded-none rounded-e-lg" : "rounded-lg"
          //}`}
          //{...props}
        ///>
      //</div>
    //</>
  //);
//}

type Props = React.PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> & {
  icon?: React.ReactNode;
  label?: string;
};
