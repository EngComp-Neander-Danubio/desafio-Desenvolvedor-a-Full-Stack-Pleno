interface Iprops {
    name: string;
}
export const HeaderMain: React.FC<Iprops> = ({ name }) => {
   return (
       <nav className="bg-primary text-black py-4">
           <div className="w-full max-w-[1108px] mx-auto px-4 flex justify-between items-center">
               <h1 className="text-xl font-bold">{name}</h1>
           </div>
       </nav>
   );
};
