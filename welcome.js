import os from 'os'
 export function useros(){
    console.log(`привет, юзер. Вижу ты зашел с ${os.type()}`)
}