import { View, Text, ScrollView } from "react-native";
import { useCartStore } from "@/stores/cart-store";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

import { formatCurrency } from "@/utils/functions/format-currency";

import { Header } from "@/components/header";
import { Product } from "@/components/product";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/link-button";

export default function Cart(){
    const cartStore = useCartStore();

    const total = formatCurrency(cartStore.products.reduce((total, product ) => total + 
        product.price * product.quantity, 0))   

    return(
        <View className=" flex-1 pt-8">
            <Header title="Seu Carrinho"/>

            <KeyboardAwareScrollView>
                <ScrollView>

                    <View className="p-5 flex-1">
                            { cartStore.products.length > 0 ? (
                                <View className="border-b border-slate-700">
                                    {
                                        cartStore.products.map((product) => (
                                            <Product key={product.id} data={product}/>
                                        ))
                                    }
                                </View>
                            ):(
                                <Text className="text-slate-400 font-body text-center my-8">
                                    Seu carrinho está vazio!
                                </Text>
                            )}

                        

                        <View className="flex-row gap-2 items-center mt-5 mb-4">
                            <Text className="text-white text-xl font-subtitle">Total:</Text>
                            <Text className="text-lime-400 text-2xl font-heading">{total}</Text>
                        </View>

                        <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..." ></Input>
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>

            <View className="p-5 gap-5">
                <Button>
                    <Button.Text>Enviar pedido</Button.Text>
                    <Button.Icon>
                        <Feather name="arrow-right-circle" size={20}/>
                    </Button.Icon>
                </Button>
                <LinkButton title="Voltar ao cardápio" href="/"/> 
            </View>
        </View>
    )
}