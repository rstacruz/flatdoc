# Dashboard

Endpoints responsible for the charts and components that render on the  Versus dashboard.

## All Time Detail

> Endpoint: versus_dashboard_all_time_detail

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "socialMedia": [
    {
      "type": "bar",
      "x": [
        19,
        12,
        35
      ],
      "y": [
        "Twitter",
        "Facebook",
        "Telegram"
      ],
      "orientation": "h"
    }
  ],
  "news": [
    {
      "type": "bar",
      "x": [
        3,
        5,
        1,
        2
      ],
      "y": [
        "CNN",
        "Business Times",
        "Time Magazine",
        "Fortune"
      ],
      "orientation": "h"
    }
  ],
  "other": [
    {
      "type": "bar",
      "x": [
        200,
        50,
        35
      ],
      "y": [
        "Nairaland",
        "Y Naija",
        "Guardian Newspapers"
      ],
      "orientation": "h"
    }
  ]
}
```

## All Time Summary

> Endpoint: versus_dashboard_all_time_summary

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "data": [
    {
      "type": "bar",
      "x": [
        5,
        2,
        1
      ],
      "y": [
        "Social Media",
        "News",
        "Other"
      ],
      "orientation": "h"
    }
  ],
  "total": 8
}
```

## Channel Sentiments

> Endpoint: versus_dashboard_channel_sentiments

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
[
  {
    "x": [
      14,
      23,
      11
    ],
    "y": [
      "Social Media",
      "News",
      "Other"
    ],
    "name": "Positive",
    "type": "bar",
    "orientation": "h"
  },
  {
    "x": [
      0,
      0,
      0
    ],
    "y": [
      "Social Media",
      "News",
      "Other"
    ],
    "name": "neutral",
    "type": "bar",
    "orientation": "h"
  },
  {
    "x": [
      18,
      29,
      25
    ],
    "y": [
      "Social Media",
      "News",
      "Other"
    ],
    "name": "Negative",
    "type": "bar",
    "orientation": "h"
  }
]
```

## Compare Average

Compare the average (monthly) of mentions across channels for up to three clients

> Endpoint: versus_dashboard_compare_average

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      103,
      165,
      337
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": [
        "#9775fa",
        "#4dabf7",
        "#38d9a9"
      ]
    }
  }
]
```

## Compare Day

Compare the number of mentions (past 24 hours) across channels for up to three clients

> Endpoint: versus_dashboard_compare_day

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      103,
      165,
      337
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": [
        "#9775fa",
        "#4dabf7",
        "#38d9a9"
      ]
    }
  }
]
```

## Compare Month

Compare the number of mentions in a month across channels for up to three clients

> Endpoint: versus_dashboard_compare_month

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      103,
      165,
      337
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": [
        "#9775fa",
        "#4dabf7",
        "#38d9a9"
      ]
    }
  }
]
```

## Compare News

Compare sentiment across news sources for clients

> Endpoint: versus_dashboard_compare_news

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      100,
      100,
      100
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": "#40C057"
    },
    "name": "Positive"
  },
  {
    "showlegend": true,
    "name": "Neutral",
    "marker": {
      "color": "#FAB005"
    },
    "hoverinfo": "y",
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "x": [
      0,
      0,
      0
    ],
    "type": "bar",
    "orientation": "h"
  },
  {
    "name": "Negative",
    "marker": {
      "color": "#FA5252"
    },
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "x": [
      0,
      0,
      0
    ],
    "type": "bar",
    "orientation": "h"
  }
]
```

## Compare Other

Compare sentiment across other news sources for clients

> Endpoint: versus_dashboard_compare_other

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      100,
      100,
      100
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": "#40C057"
    },
    "name": "Positive"
  },
  {
    "showlegend": true,
    "name": "Neutral",
    "marker": {
      "color": "#FAB005"
    },
    "hoverinfo": "y",
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "x": [
      0,
      0,
      0
    ],
    "type": "bar",
    "orientation": "h"
  },
  {
    "name": "Negative",
    "marker": {
      "color": "#FA5252"
    },
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "x": [
      0,
      0,
      0
    ],
    "type": "bar",
    "orientation": "h"
  }
]
```

## Compare Pie

Compare the number of mentions in a month across channels for up to three clients as a Pie Chart

> Endpoint: versus_dashboard_compare_pie

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      103,
      165,
      337
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": [
        "#9775fa",
        "#4dabf7",
        "#38d9a9"
      ]
    }
  }
]
```

## Compare Social

Compare sentiment across social channels for clients

> Endpoint: versus_dashboard_compare_social

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "type": "bar",
    "x": [
      100,
      100,
      100
    ],
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "orientation": "h",
    "marker": {
      "color": "#40C057"
    },
    "name": "Positive"
  },
  {
    "showlegend": true,
    "name": "Neutral",
    "marker": {
      "color": "#FAB005"
    },
    "hoverinfo": "y",
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "x": [
      0,
      0,
      0
    ],
    "type": "bar",
    "orientation": "h"
  },
  {
    "name": "Negative",
    "marker": {
      "color": "#FA5252"
    },
    "y": [
      "Client 1",
      "Client 2",
      "Client 3"
    ],
    "x": [
      0,
      0,
      0
    ],
    "type": "bar",
    "orientation": "h"
  }
]
```

## Compare Month Sentiment

Compare weekly positive sentiment count over a period of one month for clients

> Endpoint: versus_dashboard_compare_month_sentiments

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "x": [
      "2019-01-14",
      "2019-01-15",
      "2019-01-16",
      "2019-01-17",
      "2019-01-18",
      "2019-01-19",
      "2019-01-20"
    ],
    "y": [
      0,
      0,
      0,
      100,
      100,
      100,
      0
    ],
    "marker": {
      "color": "rgb(151, 117, 250)"
    },
    "line": {
      "color": "rgb(151, 117, 250)",
      "shape": "spline"
    },
    "mode": "markers+lines",
    "name": "Client 1"
  },
  {
    "x": [
      "2019-01-14",
      "2019-01-15",
      "2019-01-16",
      "2019-01-17",
      "2019-01-18",
      "2019-01-19",
      "2019-01-20"
    ],
    "y": [
      0,
      100,
      100,
      100,
      100,
      100,
      0
    ],
    "marker": {
      "color": "rgb(77, 171, 247)"
    },
    "line": {
      "color": "rgb(77, 171, 247)",
      "shape": "spline"
    },
    "mode": "markers+lines",
    "name": "Client 2"
  },
  {
    "x": [
      "2019-01-14",
      "2019-01-15",
      "2019-01-16",
      "2019-01-17",
      "2019-01-18",
      "2019-01-19",
      "2019-01-20"
    ],
    "y": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "line": {
      "color": "rgb(56, 217, 169)",
      "shape": "spline"
    },
    "marker": {
      "color": "rgb(56, 217, 169)"
    },
    "mode": "markers+lines",
    "name": "Client 3"
  }
]
```

## Compare Week Sentiment

Compare weekly positive sentiment count over a period of one week for clients

> Endpoint: versus_dashboard_compare_week_sentiments

> Payload

``` javascript
{
  "clients": [
    {
      "name": "Client 1",
      "id": "68CgvyEYhGlLcAlDFdol"
    },
    {
      "name": "Client 2",
      "id": "mvPKqA09G4Fm09RMxs4a"
    },
    {
      "name": "Client 3",
      "id": "nqaXKB0SzWN6xh7RVyzl"
    }
  ]
}
```

> Response

``` javascript
[
  {
    "x": [
      "2019-01-14",
      "2019-01-15",
      "2019-01-16",
      "2019-01-17",
      "2019-01-18",
      "2019-01-19",
      "2019-01-20"
    ],
    "y": [
      0,
      0,
      0,
      100,
      100,
      100,
      0
    ],
    "marker": {
      "color": "rgb(151, 117, 250)"
    },
    "line": {
      "color": "rgb(151, 117, 250)",
      "shape": "spline"
    },
    "mode": "markers+lines",
    "name": "Client 1"
  },
  {
    "x": [
      "2019-01-14",
      "2019-01-15",
      "2019-01-16",
      "2019-01-17",
      "2019-01-18",
      "2019-01-19",
      "2019-01-20"
    ],
    "y": [
      0,
      100,
      100,
      100,
      100,
      100,
      0
    ],
    "marker": {
      "color": "rgb(77, 171, 247)"
    },
    "line": {
      "color": "rgb(77, 171, 247)",
      "shape": "spline"
    },
    "mode": "markers+lines",
    "name": "Client 2"
  },
  {
    "x": [
      "2019-01-14",
      "2019-01-15",
      "2019-01-16",
      "2019-01-17",
      "2019-01-18",
      "2019-01-19",
      "2019-01-20"
    ],
    "y": [
      0,
      0,
      0,
      0,
      0,
      0,
      0
    ],
    "line": {
      "color": "rgb(56, 217, 169)",
      "shape": "spline"
    },
    "marker": {
      "color": "rgb(56, 217, 169)"
    },
    "mode": "markers+lines",
    "name": "Client 3"
  }
]
```

## Month Detail

> Endpoint: versus_dashboard_month_detail

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "socialMedia": [
    {
      "type": "bar",
      "x": [
        19,
        12,
        35
      ],
      "y": [
        "Twitter",
        "Facebook",
        "Telegram"
      ],
      "orientation": "h"
    }
  ],
  "news": [
    {
      "type": "bar",
      "x": [
        3,
        5,
        1,
        2
      ],
      "y": [
        "CNN",
        "Business Times",
        "Time Magazine",
        "Fortune"
      ],
      "orientation": "h"
    }
  ],
  "other": [
    {
      "type": "bar",
      "x": [
        200,
        50,
        35
      ],
      "y": [
        "Nairaland",
        "Y Naija",
        "Guardian Newspapers"
      ],
      "orientation": "h"
    }
  ]
}
```

## Month Sentiments

> Endpoint: versus_dashboard_month_sentiments

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
[
  {
    "x": [
      "Sep 30",
      "Oct 01",
      "Oct 02",
      "Oct 03",
      "Oct 04",
      "Oct 05",
      "Oct 06",
      "Oct 07",
      "Oct 08",
      "Oct 09",
      "Oct 10",
      "Oct 11",
      "Oct 12",
      "Oct 13",
      "Oct 14",
      "Oct 15",
      "Oct 16",
      "Oct 17",
      "Oct 18",
      "Oct 19",
      "Oct 20",
      "Oct 21",
      "Oct 22",
      "Oct 23",
      "Oct 24",
      "Oct 25",
      "Oct 26",
      "Oct 27",
      "Oct 28",
      "Oct 29"
    ],
    "y": [
      1111,
      688,
      4000,
      1105,
      599,
      3200,
      2195,
      1900,
      2650,
      3718,
      613,
      552,
      323,
      1466,
      1577,
      1777,
      955,
      2131,
      1262,
      3280,
      1229,
      2324,
      1625,
      1886,
      2785,
      3191,
      2334,
      1255,
      3666,
      918
    ],
    "mode": "lines",
    "line": {
      "shape": "spline"
    },
    "name": "Social Media"
  },
  {
    "x": [
      "Sep 30",
      "Oct 01",
      "Oct 02",
      "Oct 03",
      "Oct 04",
      "Oct 05",
      "Oct 06",
      "Oct 07",
      "Oct 08",
      "Oct 09",
      "Oct 10",
      "Oct 11",
      "Oct 12",
      "Oct 13",
      "Oct 14",
      "Oct 15",
      "Oct 16",
      "Oct 17",
      "Oct 18",
      "Oct 19",
      "Oct 20",
      "Oct 21",
      "Oct 22",
      "Oct 23",
      "Oct 24",
      "Oct 25",
      "Oct 26",
      "Oct 27",
      "Oct 28",
      "Oct 29"
    ],
    "y": [
      11,
      6,
      15,
      20,
      22,
      24,
      25,
      6,
      5,
      11,
      9,
      20,
      18,
      13,
      2,
      3,
      4,
      5,
      7,
      9,
      11,
      22,
      24,
      25,
      6,
      5,
      11,
      9,
      20,
      18
    ],
    "mode": "lines",
    "line": {
      "shape": "spline"
    },
    "name": "News"
  },
  {
    "x": [
      "Sep 30",
      "Oct 01",
      "Oct 02",
      "Oct 03",
      "Oct 04",
      "Oct 05",
      "Oct 06",
      "Oct 07",
      "Oct 08",
      "Oct 09",
      "Oct 10",
      "Oct 11",
      "Oct 12",
      "Oct 13",
      "Oct 14",
      "Oct 15",
      "Oct 16",
      "Oct 17",
      "Oct 18",
      "Oct 19",
      "Oct 20",
      "Oct 21",
      "Oct 22",
      "Oct 23",
      "Oct 24",
      "Oct 25",
      "Oct 26",
      "Oct 27",
      "Oct 28",
      "Oct 29"
    ],
    "y": [
      111,
      68,
      566,
      110,
      99,
      200,
      195,
      900,
      250,
      718,
      613,
      552,
      323,
      466,
      577,
      777,
      955,
      131,
      262,
      280,
      229,
      2324,
      625,
      886,
      785,
      191,
      2334,
      255,
      666,
      918
    ],
    "mode": "lines",
    "line": {
      "shape": "spline"
    },
    "name": "Others"
  }
]
```

## Month Summary

> Endpoint: versus_dashboard_month_summary

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "data": [
    {
      "type": "bar",
      "x": [
        5,
        2,
        1
      ],
      "y": [
        "Social Media",
        "News",
        "Other"
      ],
      "orientation": "h"
    }
  ],
  "total": 8
}
```

## News Mentions

> Endpoint: versus_dashboard_news_mentions

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol",
  "when": "2019-01-10"
}
```

> Response

``` javascript
{
  "mentions": 14,
  "data": [
    {
      "sentiment": -1,
      "outlet": "Guardian",
      "views": 890,
      "title": "Lorem dolor ipsum",
      "content": "Mauris lobortis eleifend tempor. Etiam et imperdiet sem. Aliquam eu mattis purus. Vivamus et molestie nunc, ultricies viverra justo. Praesent lacinia in quam sit amet blandit. Vestibulum placerat, enim at cursus dignissim, nisl risus ultricies dolor, condimentum finibus justo dolor at purus. Aenean in fringilla dolor, vitae hendrerit lectus. Etiam gravida dolor eu auctor faucibus. Nulla eu orci laoreet sapien vulputate semper non a nunc. Nam condimentum lorem mattis tellus efficitur vulputate. Aliquam erat volutpat. Vivamus ac elit eu nibh gravida egestas. Curabitur sed ligula arcu. Aliquam hendrerit enim id elementum faucibus. Duis placerat at sapien eget tincidunt.",
      "url": "http://www.guardian.com"
    },
    {
      "sentiment": 1,
      "outlet": "Time Magazine",
      "views": 221,
      "title": "Sit amet dolor",
      "content": "Nullam faucibus luctus ultricies. Cras ac faucibus arcu. Donec varius facilisis nisi. Quisque posuere libero nec consectetur ornare. Cras ullamcorper euismod tellus, posuere pharetra est blandit eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean justo lacus, maximus nec egestas vel, semper sit amet neque. Aenean efficitur tincidunt arcu, vel tincidunt nibh sodales id. Suspendisse potenti. Phasellus sagittis consectetur placerat. Vestibulum nec tempor est.",
      "url": "http://www.time.com"
    },
    {
      "sentiment": 1,
      "platform": "Newsweek",
      "views": 832,
      "title": "ut orci vel finibus",
      "content": "Nullam venenatis ut orci vel finibus. Phasellus efficitur dui risus, at ultricies augue semper et. Donec sed rutrum massa, a dignissim urna. Nulla viverra, sapien et blandit laoreet, urna diam aliquam velit, vel interdum nisl libero a odio. Donec ut interdum risus. Vestibulum tempus elit eget urna pretium tincidunt. Integer at convallis ipsum.",
      "url": "http://www.newsweek.com"
    },
    {
      "sentiment": -1,
      "platform": "Time Magazine",
      "views": 930,
      "title": "In efficitur erat",
      "content": "In efficitur erat egestas magna finibus, nec lacinia velit sollicitudin. Phasellus id mattis dolor, in hendrerit elit. Phasellus at tortor placerat, maximus elit sit amet, sodales velit. Mauris ligula leo, posuere eu risus ut, hendrerit consequat sapien. Mauris convallis tortor ut est porta sagittis. Mauris sed mi purus. Nulla in fermentum massa, nec vestibulum eros.",
      "url": "http://www.time.com"
    },
    {
      "sentiment": 1,
      "platform": "Time Magazine",
      "views": 384,
      "title": "Duis molestie dignissim mauris",
      "content": "Nam a est mi. Duis molestie dignissim mauris, in scelerisque quam eleifend at. Fusce consequat, quam et tincidunt tincidunt, tellus leo consectetur diam, gravida vestibulum orci nisl vel nulla. Etiam ac elit dignissim ex accumsan bibendum et eu lorem. Ut in vulputate sem, vel finibus nulla. Suspendisse semper sit amet sem id tempus. Praesent vulputate mattis nisi, ut interdum nulla suscipit eu. Suspendisse potenti.",
      "url": "http://www.time.com"
    }
  ]
}
```

## Other Mentions

> Endpoint: versus_dashboard_other_mentions

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol",
  "when": "2019-01-10"
}
```

> Response

``` javascript
{
  "mentions": 14,
  "data": [
    {
      "sentiment": -1,
      "outlet": "Punch",
      "views": 890,
      "title": "Lorem dolor ipsum",
      "content": "Mauris lobortis eleifend tempor. Etiam et imperdiet sem. Aliquam eu mattis purus. Vivamus et molestie nunc, ultricies viverra justo. Praesent lacinia in quam sit amet blandit. Vestibulum placerat, enim at cursus dignissim, nisl risus ultricies dolor, condimentum finibus justo dolor at purus. Aenean in fringilla dolor, vitae hendrerit lectus. Etiam gravida dolor eu auctor faucibus. Nulla eu orci laoreet sapien vulputate semper non a nunc. Nam condimentum lorem mattis tellus efficitur vulputate. Aliquam erat volutpat. Vivamus ac elit eu nibh gravida egestas. Curabitur sed ligula arcu. Aliquam hendrerit enim id elementum faucibus. Duis placerat at sapien eget tincidunt.",
      "url": "http://www.punch.com"
    },
    {
      "sentiment": 1,
      "outlet": "Yello Magazine",
      "views": 221,
      "title": "Sit amet dolor",
      "content": "Nullam faucibus luctus ultricies. Cras ac faucibus arcu. Donec varius facilisis nisi. Quisque posuere libero nec consectetur ornare. Cras ullamcorper euismod tellus, posuere pharetra est blandit eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean justo lacus, maximus nec egestas vel, semper sit amet neque. Aenean efficitur tincidunt arcu, vel tincidunt nibh sodales id. Suspendisse potenti. Phasellus sagittis consectetur placerat. Vestibulum nec tempor est.",
      "url": "http://www.yello.com"
    },
    {
      "sentiment": 1,
      "platform": "Naija",
      "views": 832,
      "title": "ut orci vel finibus",
      "content": "Nullam venenatis ut orci vel finibus. Phasellus efficitur dui risus, at ultricies augue semper et. Donec sed rutrum massa, a dignissim urna. Nulla viverra, sapien et blandit laoreet, urna diam aliquam velit, vel interdum nisl libero a odio. Donec ut interdum risus. Vestibulum tempus elit eget urna pretium tincidunt. Integer at convallis ipsum.",
      "url": "http://www.naija.com"
    },
    {
      "sentiment": -1,
      "platform": "Other Magazine",
      "views": 930,
      "title": "In efficitur erat",
      "content": "In efficitur erat egestas magna finibus, nec lacinia velit sollicitudin. Phasellus id mattis dolor, in hendrerit elit. Phasellus at tortor placerat, maximus elit sit amet, sodales velit. Mauris ligula leo, posuere eu risus ut, hendrerit consequat sapien. Mauris convallis tortor ut est porta sagittis. Mauris sed mi purus. Nulla in fermentum massa, nec vestibulum eros.",
      "url": "http://www.other.com"
    },
    {
      "sentiment": 1,
      "platform": "Other Magazine",
      "views": 384,
      "title": "Duis molestie dignissim mauris",
      "content": "Nam a est mi. Duis molestie dignissim mauris, in scelerisque quam eleifend at. Fusce consequat, quam et tincidunt tincidunt, tellus leo consectetur diam, gravida vestibulum orci nisl vel nulla. Etiam ac elit dignissim ex accumsan bibendum et eu lorem. Ut in vulputate sem, vel finibus nulla. Suspendisse semper sit amet sem id tempus. Praesent vulputate mattis nisi, ut interdum nulla suscipit eu. Suspendisse potenti.",
      "url": "http://www.other.com"
    }
  ]
}
```

## Social Mentions

> Endpoint: versus_dashboard_social_mentions

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol",
  "when": "2019-01-10"
}
```

> Response

``` javascript
{
  "mentions": 25,
  "data": [
    {
      "sentiment": -1,
      "content": "Mauris lobortis eleifend tempor. Etiam et imperdiet sem. Aliquam eu mattis purus. Vivamus et molestie nunc, ultricies viverra justo. Praesent lacinia in quam sit amet blandit. Vestibulum placerat, enim at cursus dignissim, nisl risus ultricies dolor, condimentum finibus justo dolor at purus. Aenean in fringilla dolor, vitae hendrerit lectus. Etiam gravida dolor eu auctor faucibus. Nulla eu orci laoreet sapien vulputate semper non a nunc. Nam condimentum lorem mattis tellus efficitur vulputate. Aliquam erat volutpat. Vivamus ac elit eu nibh gravida egestas. Curabitur sed ligula arcu. Aliquam hendrerit enim id elementum faucibus. Duis placerat at sapien eget tincidunt.",
      "url": "http://www.fb.me/asdf",
      "platform": "facebook",
      "handle": "asdf",
      "followers": 890
    },
    {
      "sentiment": 1,
      "content": "Nullam faucibus luctus ultricies. Cras ac faucibus arcu. Donec varius facilisis nisi. Quisque posuere libero nec consectetur ornare. Cras ullamcorper euismod tellus, posuere pharetra est blandit eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean justo lacus, maximus nec egestas vel, semper sit amet neque. Aenean efficitur tincidunt arcu, vel tincidunt nibh sodales id. Suspendisse potenti. Phasellus sagittis consectetur placerat. Vestibulum nec tempor est.",
      "url": "http://www.twitter.com",
      "platform": "twitter",
      "handle": "@ien",
      "followers": 221
    },
    {
      "sentiment": 1,
      "platform": "twitter",
      "content": "Nullam venenatis ut orci vel finibus. Phasellus efficitur dui risus, at ultricies augue semper et. Donec sed rutrum massa, a dignissim urna. Nulla viverra, sapien et blandit laoreet, urna diam aliquam velit, vel interdum nisl libero a odio. Donec ut interdum risus. Vestibulum tempus elit eget urna pretium tincidunt. Integer at convallis ipsum.",
      "url": "http://www.twitter.com",
      "handle": "@doe",
      "followers": 832
    },
    {
      "sentiment": -1,
      "platform": "twitter",
      "content": "In efficitur erat egestas magna finibus, nec lacinia velit sollicitudin. Phasellus id mattis dolor, in hendrerit elit. Phasellus at tortor placerat, maximus elit sit amet, sodales velit. Mauris ligula leo, posuere eu risus ut, hendrerit consequat sapien. Mauris convallis tortor ut est porta sagittis. Mauris sed mi purus. Nulla in fermentum massa, nec vestibulum eros.",
      "url": "http://www.twitter.com",
      "handle": "@eod_",
      "followers": 930
    },
    {
      "sentiment": 1,
      "platform": "facebook",
      "content": "Nam a est mi. Duis molestie dignissim mauris, in scelerisque quam eleifend at. Fusce consequat, quam et tincidunt tincidunt, tellus leo consectetur diam, gravida vestibulum orci nisl vel nulla. Etiam ac elit dignissim ex accumsan bibendum et eu lorem. Ut in vulputate sem, vel finibus nulla. Suspendisse semper sit amet sem id tempus. Praesent vulputate mattis nisi, ut interdum nulla suscipit eu. Suspendisse potenti.",
      "url": "http://www.fb.me/_ee__",
      "handle": "_ee__",
      "followers": 384
    }
  ]
}
```

## Today Detail

> Endpoint: versus_dashboard_today_detail

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "socialMedia": [
    {
      "type": "bar",
      "x": [
        19,
        12,
        35
      ],
      "y": [
        "Twitter",
        "Facebook",
        "Telegram"
      ],
      "orientation": "h"
    }
  ],
  "news": [
    {
      "type": "bar",
      "x": [
        3,
        5,
        1,
        2
      ],
      "y": [
        "CNN",
        "Business Times",
        "Time Magazine",
        "Fortune"
      ],
      "orientation": "h"
    }
  ],
  "other": [
    {
      "type": "bar",
      "x": [
        200,
        50,
        35
      ],
      "y": [
        "Nairaland",
        "Y Naija",
        "Guardian Newspapers"
      ],
      "orientation": "h"
    }
  ]
}
```

## Today Summary

> Endpoint: versus_dashboard_today_summary

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "data": [
    {
      "type": "bar",
      "x": [
        5,
        2,
        1
      ],
      "y": [
        "Social Media",
        "News",
        "Other"
      ],
      "orientation": "h"
    }
  ],
  "total": 8
}
```

## Topic Sentiments

> Endpoint: versus_dashboard_topic_sentiments

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
[
  {
    "x": [
      14,
      23,
      11
    ],
    "y": [
      "Social Media",
      "News",
      "Other"
    ],
    "name": "Positive",
    "type": "bar",
    "orientation": "h"
  },
  {
    "x": [
      0,
      0,
      0
    ],
    "y": [
      "Social Media",
      "News",
      "Other"
    ],
    "name": "neutral",
    "type": "bar",
    "orientation": "h"
  },
  {
    "x": [
      18,
      29,
      25
    ],
    "y": [
      "Social Media",
      "News",
      "Other"
    ],
    "name": "Negative",
    "type": "bar",
    "orientation": "h"
  }
]
```

## Week Detail

> Endpoint: versus_dashboard_week_detail

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "socialMedia": [
    {
      "type": "bar",
      "x": [
        19,
        12,
        35
      ],
      "y": [
        "Twitter",
        "Facebook",
        "Telegram"
      ],
      "orientation": "h"
    }
  ],
  "news": [
    {
      "type": "bar",
      "x": [
        3,
        5,
        1,
        2
      ],
      "y": [
        "CNN",
        "Business Times",
        "Time Magazine",
        "Fortune"
      ],
      "orientation": "h"
    }
  ],
  "other": [
    {
      "type": "bar",
      "x": [
        200,
        50,
        35
      ],
      "y": [
        "Nairaland",
        "Y Naija",
        "Guardian Newspapers"
      ],
      "orientation": "h"
    }
  ]
}
```

## Week Sentiments

> Endpoint: versus_dashboard_week_sentiments

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
[
  {
    "x": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "y": [
      11,
      6,
      15,
      20,
      22,
      24,
      25
    ],
    "mode": "lines",
    "line": {
      "shape": "spline"
    },
    "name": "Social Media"
  },
  {
    "x": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "y": [
      16,
      5,
      11,
      9,
      20,
      18,
      13
    ],
    "mode": "lines",
    "line": {
      "shape": "spline"
    },
    "name": "News"
  },
  {
    "x": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "y": [
      2,
      3,
      4,
      5,
      7,
      9,
      11
    ],
    "mode": "lines",
    "line": {
      "shape": "spline"
    },
    "name": "Others"
  }
]
```

## Week Summary

> Endpoint: versus_dashboard_week_summary

> Payload

``` javascript
{
  "docRef": "68CgvyEYhGlLcAlDFdol"
}
```

> Response

``` javascript
{
  "data": [
    {
      "type": "bar",
      "x": [
        5,
        2,
        1
      ],
      "y": [
        "Social Media",
        "News",
        "Other"
      ],
      "orientation": "h"
    }
  ],
  "total": 8
}
```

