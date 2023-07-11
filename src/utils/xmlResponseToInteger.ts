export const xmlToInt = (data: string) => {


    const textToFindFirst = `<?xml version="1.0" encoding="utf-8"?>`;
    const textToFindSecond = `<int xmlns="http://ati.su/WebServices/RoutesService/RoutesService.asmx">`;
    const textToFindEnd = '</int>';


    let text = data.replace(textToFindFirst, '');
    text = text.replace(textToFindSecond, '');
    text = text.replace(textToFindEnd, '').substring(2);

    return parseInt(text);
}