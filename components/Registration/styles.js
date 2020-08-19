import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    buttonArea: {
        marginBottom: 30,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    textarea: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        borderColor: '#000',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 25,
        width: 250,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 18
    },
    data: {
        flexGrow: 1,
        marginTop: 40
    }
});