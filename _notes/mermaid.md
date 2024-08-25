---
---

---
title: Mermaid
---
# Introduction

I use [Mermaid](https://mermaid.js.org) to create diagrams to help me with the design and documentation of software I'm creating, including COTS packages such as the Primavera applications that can be found in Oracle's [Construction and Engineering](https://docs.oracle.com/en/industries/construction-engineering/index.html) industry sector.

Some of the Mermaid diagrams can be themed using css, and having created a simple theme for the Entity Relationships, I am hoping to create more.  The idea is for these themes to be used as a template whenever I need to create the diagram.

# Entity Relationships

Entity Relationships in Mermaid can use their actual name or an alias.  By using an alias, I can treat the letters it starts with as if it is a CSS class, and also provide a style for that class.  My Entity Relationship provides a different colour scheme for a Tables and Views when documenting database schemas.  It also includes different colour schemes for Sub-Queries and the resulting data model when building reports and data feeds.  This has been very useful for complex data models used in [Oracle Analytics Publisher](https://www.oracle.com/uk/middleware/technologies/analytics-publisher.html).

Here are the themes:

| Name      | Alias prefix  | Basic Colour |
| --------- | ------------- | ------------ |
| Table     | tbl           | Blue         |
| View      | vie           | Green        |
| Sub-Query | sub           | Red          |
| Final     | fin           | Yellow       |
| Default   | anything else | Grey\Blue    |

```mermaid

%%{init: {
"theme": "default",
"themeCSS": [
".er.entityBox {fill:#BCCCDC; stroke:#102A43}",
".er.attributeBoxOdd {fill:#FFFFFF; stroke:#102A43}",
".er.attributeBoxEven {fill:#F0F4F8; stroke:#102A43}",
".er.relationshipLabel {fill:#102A43; }",
".er.relationshipLabelBox {fill:#FFFFFF; }",

"[id^=entity-tbl] .er.entityBox {fill:#81DEFD; stroke:#102A43}",
"[id^=entity-tbl] .er.attributeBoxOdd {fill:#FFFFFF; stroke:#102A43}",
"[id^=entity-tbl] .er.attributeBoxEven {fill:#E3F8FF; stroke:#102A43}",

"[id^=entity-vie] .er.entityBox {fill:#8EEDC7; stroke:#102A43}",
"[id^=entity-vie] .er.attributeBoxOdd {fill:#FFFFFF; stroke:#102A43}",
"[id^=entity-vie] .er.attributeBoxEven {fill:#EFFCF6; stroke:#102A43}",

"[id^=entity-sub] .er.entityBox {fill:#FF9B9B; stroke:#102A43}",
"[id^=entity-sub] .er.attributeBoxOdd {fill:#FFFFFF; stroke:#102A43}",
"[id^=entity-sub] .er.attributeBoxEven {fill:#FFE3E3; stroke:#102A43}",

"[id^=entity-fin] .er.entityBox {fill:#FCE588; stroke:#102A43}",
"[id^=entity-fin] .er.attributeBoxOdd {fill:#FFFFFF; stroke:#102A43}",
"[id^=entity-fin] .er.attributeBoxEven {fill:#FFFBEA; stroke:#102A43}"
]
}}%%

erDiagram

    default1{
        integer default1_id PK "Primary Key"
        string default1_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }

    default2{
        integer default2_id PK "Primary Key"
        string default2_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    default1 ||--|| default2 : "Relationship lable"

    tblTable1[Table1] {
        integer table1_id PK "Primary Key"
        string table1_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    default2 ||--|| tblTable1 : "Relationship lable"

    tblTable2[Table2] {
        integer table2_id PK "Primary Key"
        string table2_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    tblTable1 ||--|| tblTable2 : "Relationship lable"

    vieView1[View1] {
        integer view1_id PK "Primary Key"
        string view1_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    default2 ||--|| vieView1 : "Relationship lable"

    vieView2[View2] {
        integer view2_id PK "Primary Key"
        string view2_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    vieView1 ||--|| vieView2 : "Relationship lable"

    subSubQuery1[SubQuery1] {
        integer subquery1_id PK "Primary Key"
        string subquery1_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    default2 ||--|| subSubQuery1 : "Relationship lable"

    subSubQuery2[SubQuery2] {
        integer subquery2_id PK "Primary Key"
        string subquery2_parent FK "Foreign Key"
        string name "Name of thing"
		float amount "Cost of thing"
	}
	subSubQuery1 ||--|| subSubQuery2 : "Relationship lable"

    finReport1[Report1] {
        integer report1_id PK "Primary Key"
        string report1_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    tblTable2 ||--|| finReport1 : "Relationship lable"
    vieView2 ||--|| finReport1 : "Relationship lable"
    subSubQuery2 ||--|| finReport1 : "Relationship lable"

    finReport2[Report2] {
        integer report2_id PK "Primary Key"
        string report_parent FK "Foreign Key"
        string name "Name of thing"
        float amount "Cost of thing"
    }
    finReport1 ||--|| finReport2 : "Relationship lable"

```
