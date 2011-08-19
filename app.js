module.exports = {
    _id: 'test',
    
    routes: [
        '/loader => main.loader',
        '/weather/:state/:city => weather.byCity',
        '/weather/:state => weather.byState',
        '/config => decarta.getConfig',
        '/geocode/:address => decarta.geocode',
        '/route/:waypoints => decarta.route'
    ]
};