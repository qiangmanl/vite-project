// Example:
//     document.getElementsByTagName('html')[0].setAttribute('lang', 'es-ES');
//  any lang atttribute of html element will change lang atttribute to  
// "ES" as  "<html lang="es-ES">"" finally.

const changeHTMLAttribute = (attribute: string, value: string): void => {
	if (document.body)
		document.getElementsByTagName('html')[0].setAttribute(attribute, value)
}

export {
	// getLayoutConfigs,
	changeHTMLAttribute,
}
