const graphql = require("graphql");
const lodash = require("lodash");

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

const news = [
    {
        id: "1",
        title: "Windows 7'ye Veda İçin Geri Sayım Başladı",
        description: "Geçtiğimiz günlerde tekrar dünyanın en değerli şirketi konumuna gelen Microsoft, en popüler sürümü olan Windows 7'den genel desteğini çekeceğini açıkladı. Yaklaşık 400 gün içerisinde tüm kullanıcılarına sağladığı tamamen ücretsiz desteği çekecek olan teknoloji devi, kullanıcılarını da Windows 10'a geçmeleri konusunda uyarıyor.",
        year: 2018,
        category: "Yazılım"
    },
    {
        id: "2",
        title: "Popüler JavaScript Kütüphanesi’nde Kripto Para Çalmak İçin Açık Bulundu",
        description: "Event-Stream adlı paketi etkileyen bu zararlı kodun içinde bulunduğu kod, Node.js yayın modülleriyle çalışmayı kolaylaştırması için var. Zararlı kodun varlığı geçen hafta keşfedilmiş olmasına rağmen, kodun çözülmesi ve açığa çıkarılması bir hafta sürdü.",
        year: 2018,
        category: "Yazılım"
    },
    {
        id: "3",
        title: "Beyinde Oluşturulan Yeni Bağlantılarla Parkinson Hastalığının Etkileri Azaltıldı",
        description: "Gelişen teknoloji sayesinde, sağlık alanında da büyük gelişmeler oluyor. Birçok hastalığın tedavisi bulunurken bazılarının da etkileri azaltılıyor. Parkinson hastalığına sahip kişilerde gözlemlenen titreme ve kas sertleşmeleri, beynin motor bölgelerinin koordinasyonundan sorumlu olan subtalamik çekirdeğinde aşırı uyarılmaya sebep oluyor.",
        year: 2017,
        category: "Bilim"
    },
    {
        id: "4",
        title: "Yapay Zeka Teknolojisi Kötü Amaçlı Yazılımları Tespit Edip Onlarla Savaşacak",
        description: "Malwarebytes'ın CEO'su Marcin Kleczynski, gelecek yıl siber güvenlik konularıyla ilgili gerçekleşebilecek tahmin listesini yayınladı. Yapılan tahminlere göre, yapay zeka kötü amaçlı yazılımları tespit edip onlarla mücadele edecek. Uzak sunucular, sahtekarlık sorunlarının nasıl ve ne zaman izlendiğini ve engellendiğini izleyebilecek ve yazılımı savunmaya karşı daha dirençli hale getirmek için anında düzenleyebilecek.",
        year: 2017,
        category: "Yapay Zeka"
    }
];

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        new: {
            type: NewType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return lodash.find(news, { id: args.id });
            }
        },
        news: {
            type: new GraphQLList(NewType),
            args: {},
            resolve(parent, args){
                return news;
            }
        }
    })
});

const NewType = new GraphQLObjectType({
    name: 'New',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        year: { type: GraphQLInt }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});