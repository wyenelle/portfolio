

export const CopyToclipboard = async (text) => {
    const permission = await navigator.permissions.query({name: "clipboard-write"})
    let result 
    try{
        if (permission.state === "granted" || permission.query === " prompt"){
               await navigator.clipboard.writeText(text)
                //    alert('Successfully copied to clipboard!!')
                   result = true
        }else {
            alert("Can't access the clipboard")
        }

    } catch(e){
        alert("Wasn't ablt to copy to clipboard", )
        result = false
    }
    return result
}

