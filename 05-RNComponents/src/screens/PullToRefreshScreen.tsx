import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const PullToRefreshScreen = () => {

    const {top} = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 1500);
    };

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10} // Solo Android
                    progressBackgroundColor={'#5856D6'}
                    colors={['white', 'red', 'orange']}
                    style={{ // Estilos para iOS y Android
                        backgroundColor: '#5856D6'
                    }}
                    // tintColor={'white'} // Solo iOS
                    // title='Refreshing' // Solo iOS
                    // titleColor={'white'} // Solo iOS
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to refresh' />

                {
                    data && <HeaderTitle title={data} />
                }

            </View>
        </ScrollView>
    )
}
