import kehuishou from './imgs/kehuishou.jpg'
import youhai from './imgs/youhai.jpg'
import gan from './imgs/gan.jpg'
import shi from './imgs/shi.jpg'

export  const sortDataList = [{
  type: 1,
  label: '可回收物',
  color: '#164883',
  bg: '#1648832c',
  pic: kehuishou,
  define: '废纸张、废塑料、废玻璃制品、废金属、废织物等适宜回收、可循环利用的生活废弃物。',
  rules: ['轻投轻放', '清洁干燥、避免污染，废纸尽量平整', '立体包装物请清空内容物，清洁后压扁投放', '有尖锐边角的，应包裹后投放']
}, {
  type: 2,
  label: '有害垃圾',
  color: '#E43121',
  bg: '#E431212c',
  pic: youhai,
  define: '废电池、废灯管、废药品、废油漆及其容器等对人体健康或者自然环境造成直接或者潜在危害的生活废弃物。',
  rules: ['轻投轻放', '易破损的请连带包装或者包裹后轻放', '如易挥发，请密封后投放']
}, {
  type: 3,
  label: '湿垃圾',
  color: '#664035',
  bg: '#6640352c',
  pic: gan,
  define: '即易腐垃圾，包括食材废料、剩菜剩饭、过期食品、瓜皮果核、花卉绿植、中药药渣等生物质生活废弃物。',
  rules: ['纯流质的食物垃圾，如牛奶等，应直接倒进下水口', '有包装物的湿垃圾应将包装物去除后投放，包装物清洗后投放到对应的可回收物或干垃圾容器']
}, {
  type: 4,
  label: '干垃圾',
  color: '#2C2B27',
  bg: '#2C2B272c',
  pic: shi,
  define: '即其他垃圾，是指除可回收物、有害垃圾、湿垃圾以外的其他生活废弃物。',
  rules: ['尽量沥干水分', '难以辨识类别的生活垃圾投入干垃圾容器内']
}]