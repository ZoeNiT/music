import http from './instance'


/* 1. 手机登录
必选参数 :
phone: 手机号码
password: 密码
可选参数 :
countrycode: 国家码，用于国外手机号登录，例如美国传入：1
md5_password: md5加密后的密码,传入后 password 将失效
接口地址 : /login/cellphone
调用例子 : /login/cellphone?phone=xxx&password=yyy /login/cellphone?phone=xxx&md5_password=yyy */
export const postLogin = (phone, password) => { return http.get(`/login/cellphone?phone=${phone}&password=${password}&t=${new Date()}`, {}) }

/* 获取用户信息 , 歌单，收藏，mv, dj 数量
说明 : 登录后调用此接口 , 可以获取用户信息
接口地址 : /user/subcount
调用例子 : /user/subcount */
export const getSubCount = () => { return http.get(`/user/subcount`, {}) }

/* 获取用户等级信息
说明 : 登录后调用此接口 , 可以获取用户等级信息,包含当前登录天数,听歌次数,下一等级需要的登录天数和听歌次数,当前等级进度,对应 https://music.163.com/#/user/level
接口地址 : /user/level
调用例子 : /user/level */
export const getUserLevel = () => { return http.get(`/user/level`, {}) }

/* 默认搜索关键词
说明 : 调用此接口 , 可获取默认搜索关键词
接口地址 : /search/default */
export const getDefaultKey = () => { return http.get(`/search/default`, {}) }
/* 热搜列表(详细)
说明 : 调用此接口,可获取热门搜索列表
接口地址 : /search/hot/detail
调用例子 : /search/hot/detail */
export const getHotSearchKey = () => { return http.get(`/search/hot/detail`, {}) }

/* 获取音乐 url
说明 : 使用歌单详情接口后 , 能得到的音乐的 id, 但不能得到的音乐 url, 调用此接口, 传入的音乐 id( 可多个 , 用逗号隔开 ), 可以获取对应的音乐的 url,未登录状态或者非会员返回试听片段(返回字段包含被截取的正常歌曲的开始时间和结束时间
注 : 部分用户反馈获取的 url 会 403,hwaphon找到的解决方案是当获取到音乐的 id 后，将 https://music.163.com/song/media/outer/url?id=id.mp3 以 src 赋予 Audio 即可播
必选参数 : id : 音乐 i
可选参数 : br: 码率,默认设置了 999000 即最大码率,如果要 320k 则可设置为 320000,其他类
接口地址 : /song/ur
调用例子 : /song/url?id=33894312 /song/url?id=405998841,33894312 */
export const getSongUrl = (id, br = 999000) => { return http.get(`/song/url?id=${id}&br=${br}`, {}) }

//  Home 页


/* banner
说明 : 调用此接口 , 可获取 banner( 轮播图 ) 数据
可选参数 :
type:资源类型,对应以下类型,默认为 0 即PC
0: pc
1: android
2: iphone
3: ipad
接口地址 : /banner
调用例子 : /banner, /banner?type=2 */
export const getBanner = () => { return http.get(`/banner`, {}) }

/* 获取精品歌单
说明 : 调用此接口 , 可获取精品歌单
可选参数 : cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部",可从精品歌单标签列表接口获取(/playlist/highquality/tags)
limit: 取出歌单数量 , 默认为 20
before: 分页参数,取上一页最后一个歌单的 updateTime 获取下一页数据
接口地址 : /top/playlist/highquality
调用例子 : /top/playlist/highquality?before=1503639064232&limit=3 */
export const getRecoSong = ({ cat, limit = 5 }) => { return http.get(`/top/playlist/highquality?cat=${cat}&limit=${limit}`, {}) }

/* 新碟上架
说明 : 调用此接口 , 可获取新碟上架列表 , 如需具体音乐信息需要调用获取专辑列表接 口 /album , 然后传入 id, 如 /album?id=32311&limit=30
可选参数 :
limit: 取出数量 , 默认为 50
offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
type : new:全部 hot:热门,默认为 new
year : 年,默认本年
month : 月,默认本月
接口地址 : /top/album
调用例子 : /top/album?offset=0&limit=30&year=2019&month=6 */
export const getNewDisc = ({ limit, offset, area, type }) => { return http.get(`/top/album?limit=${limit}&offset=${offset}&area=${area}&type=${type}`, {}) }


//  Detail 歌单详细页

/* 获取歌单详情
说明 : 歌单能看到歌单名字, 但看不到具体歌单内容 , 调用此接口 , 传入歌单 id, 可 以获取对应歌单内的所有的音乐(未登录状态只能获取不完整的歌单,登录后是完整的)，但是返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情 (https://github.com/Binaryify/NeteaseCloudMusicApi/issues/452)
必选参数 : id : 歌单 id
可选参数 : s : 歌单最近的 s 个收藏者,默认为8
接口地址 : /playlist/detail
调用例子 : /playlist/detail?id=24381616 */
export const getPlayListDetail = ({ id, s }) => { return http.get(`/playlist/detail?id=${id}&s=${s}`, {}) }

/* 获取歌曲详情
说明 : 调用此接口 , 传入音乐 id(支持多个 id, 用 , 隔开), 可获得歌曲详情
必选参数 : ids: 音乐 id, 如 ids=347230
接口地址 : /song/detail
调用例子 : /song/detail?ids=347230,/song/detail?ids=347230,347231 */
export const getSongListDetail = (ids) => { return http.get(`/song/detail?ids=${ids}`, {}) }

/* 歌单评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该歌单的所有评论 ( 不需要 登录 )
必选参数 : id: 歌单 id
可选参数 : limit: 取出评论数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
接口地址 : /comment/playlist
调用例子 : /comment/playlist?id=705123491 */
export const getPlayListComment = ({ id, limit, offset }) => { return http.get(`/comment/playlist?id=${id}&limit=${limit}&offset=${offset}`, {}) }

/* 获取专辑内容
说明 : 调用此接口 , 传入专辑 id, 可获得专辑内容
必选参数 : id: 专辑 id
接口地址 : /album
调用例子 : /album?id=32311 */
export const getAlbumListDetail = (id) => { return http.get(`/album?id=${id}`, {}) }

/* 专辑评论
说明 : 调用此接口 , 传入音乐 id 和 limit 参数 , 可获得该专辑的所有评论 ( 不需要 登录 )
必选参数 : id: 专辑 id
可选参数 : limit: 取出评论数量 , 默认为 20
offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过5000条评论的时候需要用到)
接口地址 : /comment/album
调用例子 : /comment/album?id=32311 */
export const getAlbumComment = ({ id, limit, offset }) => { return http.get(`/comment/album?id=${id}&limit=${limit}&offset=${offset}`, {}) }