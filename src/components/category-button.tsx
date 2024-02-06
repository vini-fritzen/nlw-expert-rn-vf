import { Text, Pressable, PressableProps } from "react-native";
import { clsx } from "clsx";

type CategoryProps = PressableProps & {
    title: string,
    isSlected?: boolean
}
export function CategoryButton({ title, isSlected, ...rest}: CategoryProps){
    return(
        <Pressable className={clsx(
            "bg-slate-800 px-4 justify-center rounded-md h-10",
            isSlected && "border-2 border-lime-300"
        )} 
        {...rest}
        >
            <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
        </Pressable>
    )
}