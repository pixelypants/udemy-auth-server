module.exports = function (app: any) {
    app.get('/', function (req: any, res: any, next: any) {
        res.send(['big', 'fat', 'bats']);
    })
}