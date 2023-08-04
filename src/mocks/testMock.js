const Mock = require('mockjs');

const orderInfoMockData = Mock.mock({
    code: 0,
    data: {
      _id: '@guid',
      number: '@integer(1000000000)',
      specialistTypes: ['@word'],
      category: {
        _id: '@guid',
        title: '@ctitle',
        remark: '@cparagraph',
        translations: '@csentence',
        isDeleted: '@boolean'
      },
      subcategory: {
        _id: '@guid',
        title: '@ctitle',
        remark: '@cparagraph',
        translations: '@csentence',
        category: '@word',
        isDeleted: '@boolean'
      },
      serviceType: {
        _id: '@guid',
        title: '@ctitle',
        remark: '@cparagraph',
        translations: '@csentence',
        subcategory: '@word',
        isDeleted: '@boolean'
      },
      'problems|2-5': [
        {
          _id: '@guid',
          title: '@ctitle',
          remark: '@cparagraph',
          translations: '@csentence',
          clarificaition: '@cparagraph',
          isDeleted: '@boolean'
        }
      ],
      problemDescription: '@cparagraph',
      address: {
        city: '@city',
        region: '@region',
        address: '@county(true)',
        lat: '@float(30, 40, 6, 8)',
        lng: '@float(110, 120, 6, 8)'
      },
      completionDeadline: '@datetime',
      priceFrom: '@float(100, 1000, 2, 2)',
      priceTo: '@float(1000, 5000, 2, 2)',
      fixedPrice: '@float(1000, 5000, 2, 2)',
      images: ['@image'],
      preferredGender: '@word',
      comment: '@cparagraph',
      preferredYears: {
        from: '@integer(18, 30)',
        to: '@integer(30, 50)'
      },
      findSpecialistType: ['CHOOSE_SPECIALIST'],
      createdBy: '@cname',
      totalSpecialists: '@integer(0, 10)',
      isDone: '@boolean',
      needToUpdateSpecialistsCount: '@boolean',
      executionTime: '@integer(0, 60)',
      createdAt: '@datetime',
      updatedAt: '@datetime',
      status: 'IN_WORK',
      priceType: 0
    }
  });

console.log(JSON.stringify(orderInfoMockData, null, 2));