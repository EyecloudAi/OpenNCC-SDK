/********************************************************************************
** Form generated from reading UI file 'del_blob.ui'
**
** Created by: Qt User Interface Compiler version 5.12.9
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_DEL_BLOB_H
#define UI_DEL_BLOB_H

#include <QtCore/QVariant>
#include <QtWidgets/QApplication>
#include <QtWidgets/QComboBox>
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QPushButton>
#include <QtWidgets/QSpacerItem>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_del_blob
{
public:
    QWidget *widget;
    QVBoxLayout *verticalLayout;
    QLabel *label;
    QComboBox *del_file;
    QHBoxLayout *horizontalLayout;
    QSpacerItem *horizontalSpacer;
    QPushButton *comfirm_btn;
    QSpacerItem *horizontalSpacer_2;

    void setupUi(QWidget *del_blob)
    {
        if (del_blob->objectName().isEmpty())
            del_blob->setObjectName(QString::fromUtf8("del_blob"));
        del_blob->resize(481, 190);
        widget = new QWidget(del_blob);
        widget->setObjectName(QString::fromUtf8("widget"));
        widget->setGeometry(QRect(30, 20, 371, 134));
        verticalLayout = new QVBoxLayout(widget);
        verticalLayout->setSpacing(20);
        verticalLayout->setObjectName(QString::fromUtf8("verticalLayout"));
        verticalLayout->setContentsMargins(0, 0, 0, 0);
        label = new QLabel(widget);
        label->setObjectName(QString::fromUtf8("label"));
        label->setMinimumSize(QSize(350, 30));
        label->setMaximumSize(QSize(350, 16777215));

        verticalLayout->addWidget(label);

        del_file = new QComboBox(widget);
        del_file->setObjectName(QString::fromUtf8("del_file"));
        del_file->setMinimumSize(QSize(0, 30));

        verticalLayout->addWidget(del_file);

        horizontalLayout = new QHBoxLayout();
        horizontalLayout->setObjectName(QString::fromUtf8("horizontalLayout"));
        horizontalSpacer = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer);

        comfirm_btn = new QPushButton(widget);
        comfirm_btn->setObjectName(QString::fromUtf8("comfirm_btn"));
        comfirm_btn->setMinimumSize(QSize(0, 30));

        horizontalLayout->addWidget(comfirm_btn);

        horizontalSpacer_2 = new QSpacerItem(40, 20, QSizePolicy::Expanding, QSizePolicy::Minimum);

        horizontalLayout->addItem(horizontalSpacer_2);


        verticalLayout->addLayout(horizontalLayout);


        retranslateUi(del_blob);

        QMetaObject::connectSlotsByName(del_blob);
    } // setupUi

    void retranslateUi(QWidget *del_blob)
    {
        del_blob->setWindowTitle(QApplication::translate("del_blob", "Form", nullptr));
        label->setText(QApplication::translate("del_blob", "Please select a  blob file which you want to delete:", nullptr));
        comfirm_btn->setText(QApplication::translate("del_blob", "Confirm", nullptr));
    } // retranslateUi

};

namespace Ui {
    class del_blob: public Ui_del_blob {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_DEL_BLOB_H
