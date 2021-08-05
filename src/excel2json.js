const Excel = require('exceljs');
const Big = require('big.js');
const {utils} = require('web3');

const Big_1e18 = Big('1e18');

export async function excel2json(excelData) {
    const workbook = new Excel.Workbook();
    // read():stream
    // load():data
    const excel = await workbook.xlsx.load(excelData);
    
    return excel.worksheets.reduce((sarr,sheet) => {
        const jsonList = sheet._rows.reduce((arr,row, index)=>{
            const address = row._cells[0]._value.toString();
            if(utils.isAddress(address)) {
                let amount = row._cells[1];
                if(amount) amount = Big(row._cells[1].toString()).mul(Big_1e18).toString();
                arr.push([address, amount]);
            }else{
                console.log("invalid address:", index, address);
            }
            return arr;
        },[]);
        sarr.push({
            name: sheet.name,
            transfer: jsonList
        });
        return sarr;
    }, []);
}