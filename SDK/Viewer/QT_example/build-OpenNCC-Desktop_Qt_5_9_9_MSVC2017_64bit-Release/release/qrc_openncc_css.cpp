/****************************************************************************
** Resource object code
**
** Created by: The Resource Compiler for Qt version 5.9.9
**
** WARNING! All changes made in this file will be lost!
*****************************************************************************/

static const unsigned char qt_resource_data[] = {
  // D:/work/openncc/View/source/OpenNCC/res/style.css
  0x0,0x0,0x0,0x7a,
  0xef,
  0xbb,0xbf,0x51,0x4c,0x61,0x62,0x65,0x6c,0x7b,0xd,0xa,0x20,0x20,0x20,0x20,0x66,
  0x6f,0x6e,0x74,0x2d,0x73,0x69,0x7a,0x65,0x20,0x3a,0x20,0x31,0x35,0x70,0x78,0x3b,
  0xd,0xa,0x7d,0xd,0xa,0xd,0xa,0x51,0x43,0x6f,0x6d,0x62,0x6f,0x42,0x6f,0x78,
  0x7b,0xd,0xa,0x20,0x20,0x20,0x20,0x66,0x6f,0x6e,0x74,0x2d,0x73,0x69,0x7a,0x65,
  0x20,0x3a,0x20,0x31,0x35,0x70,0x78,0x3b,0xd,0xa,0x7d,0xd,0xa,0xd,0xa,0xd,
  0xa,0x51,0x50,0x75,0x73,0x68,0x42,0x75,0x74,0x74,0x6f,0x6e,0x7b,0xd,0xa,0x20,
  0x20,0x20,0x20,0x66,0x6f,0x6e,0x74,0x2d,0x73,0x69,0x7a,0x65,0x20,0x3a,0x20,0x31,
  0x35,0x70,0x78,0x3b,0xd,0xa,0x7d,0xd,0xa,
  
};

static const unsigned char qt_resource_name[] = {
  // res
  0x0,0x3,
  0x0,0x0,0x78,0xc3,
  0x0,0x72,
  0x0,0x65,0x0,0x73,
    // style.css
  0x0,0x9,
  0x0,0x28,0xbf,0x23,
  0x0,0x73,
  0x0,0x74,0x0,0x79,0x0,0x6c,0x0,0x65,0x0,0x2e,0x0,0x63,0x0,0x73,0x0,0x73,
  
};

static const unsigned char qt_resource_struct[] = {
  // :
  0x0,0x0,0x0,0x0,0x0,0x2,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x1,
0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,
  // :/res
  0x0,0x0,0x0,0x0,0x0,0x2,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x2,
0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,
  // :/res/style.css
  0x0,0x0,0x0,0xc,0x0,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,
0x0,0x0,0x1,0x78,0x90,0x83,0xa9,0x1,

};

#ifdef QT_NAMESPACE
#  define QT_RCC_PREPEND_NAMESPACE(name) ::QT_NAMESPACE::name
#  define QT_RCC_MANGLE_NAMESPACE0(x) x
#  define QT_RCC_MANGLE_NAMESPACE1(a, b) a##_##b
#  define QT_RCC_MANGLE_NAMESPACE2(a, b) QT_RCC_MANGLE_NAMESPACE1(a,b)
#  define QT_RCC_MANGLE_NAMESPACE(name) QT_RCC_MANGLE_NAMESPACE2( \
        QT_RCC_MANGLE_NAMESPACE0(name), QT_RCC_MANGLE_NAMESPACE0(QT_NAMESPACE))
#else
#   define QT_RCC_PREPEND_NAMESPACE(name) name
#   define QT_RCC_MANGLE_NAMESPACE(name) name
#endif

#ifdef QT_NAMESPACE
namespace QT_NAMESPACE {
#endif

bool qRegisterResourceData(int, const unsigned char *, const unsigned char *, const unsigned char *);

bool qUnregisterResourceData(int, const unsigned char *, const unsigned char *, const unsigned char *);

#ifdef QT_NAMESPACE
}
#endif

int QT_RCC_MANGLE_NAMESPACE(qInitResources_openncc_css)();
int QT_RCC_MANGLE_NAMESPACE(qInitResources_openncc_css)()
{
    QT_RCC_PREPEND_NAMESPACE(qRegisterResourceData)
        (0x2, qt_resource_struct, qt_resource_name, qt_resource_data);
    return 1;
}

int QT_RCC_MANGLE_NAMESPACE(qCleanupResources_openncc_css)();
int QT_RCC_MANGLE_NAMESPACE(qCleanupResources_openncc_css)()
{
    QT_RCC_PREPEND_NAMESPACE(qUnregisterResourceData)
       (0x2, qt_resource_struct, qt_resource_name, qt_resource_data);
    return 1;
}

namespace {
   struct initializer {
       initializer() { QT_RCC_MANGLE_NAMESPACE(qInitResources_openncc_css)(); }
       ~initializer() { QT_RCC_MANGLE_NAMESPACE(qCleanupResources_openncc_css)(); }
   } dummy;
}
