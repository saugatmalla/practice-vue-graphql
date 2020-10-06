<template>
  <div id="app">
    <Books />
  </div>
</template>

<script>
import Books from "./components/Books.vue";
export default {
  name: "App",
  components: {
    Books,
  },
};
</script>

<style lang="scss">
body{
  font-family: "Roboto", sans-serif;;
}
.box-wrapper {
  font-family: "Roboto", sans-serif;
  display: table;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(155deg, var(--v-accent-base) 0%, #fff 100%);
}
.box-wrapper::before {
  content: "";
  position: fixed;
  left: -55%;
  top: 60%;
  right: 0;
  width: 155%;
  height: 100%;
  transform: rotate(15deg);
  background: linear-gradient(155deg, var(--v-primary-base) 0%, #fff 100%);
}
.application--wrap .theme--dark.v-navigation-drawer {
  background-color: #333;
}
.application--wrap .theme--dark.v-navigation-drawer.has_color {
  background-color: var(--v-secondary-base);
}
.inline-block {
  display: inline-block;
}
.pointer {
  cursor: pointer;
}
.opacity-07 {
  opacity: 0.7;
}
a:hover {
  color: var(--v-secondary-base);
}
.location-list .v-list__tile {
  height: auto;
}
.v-navigation-drawer .v-list .v-list__tile__title {
  font-size: 14px !important;
}
table.v-datatable.v-table.theme--light thead tr th {
  /* background: #afafaf; */
  font-size: 14px;
  color: #333;
  font-weight: 300;
  /* border: 1px solid #e7e7e7; */
}
.tabulardata .theme--light.v-datatable thead th.column.sortable.active,
.tabulardata .theme--light.v-datatable thead th.column.sortable.active .v-icon,
.tabulardata .theme--light.v-datatable thead th.column.sortable:hover,
.tabulardata .theme--light.v-datatable thead th.column.sortable .v-icon {
  color: var(--v-secondary-base);
}

.normal-border {
  border: 1px solid #868383;
  box-shadow: 0px 0px 5px #cacaca;
}
.theme--light.v-datatable thead th.column.sortable.active,
.theme--light.v-datatable thead th.column.sortable.active .v-icon,
.theme--light.v-datatable thead th.column.sortable:hover,
.theme--light.v-datatable thead th.column.sortable .v-icon {
  color: rgb(255, 255, 255);
}
.table-overlow-none .v-table__overflow {
  width: 100%;
  overflow-x: inherit;
  overflow-y: inherit;
}
.table-app-logo {
  width: 20px !important;
  height: 20px !important;
  float: left;
  margin-right: 15px;
}

.table-app-logo {
  width: 20px !important;
  height: 20px !important;
  float: left;
  margin-right: 15px;
}
.table-app-logo.lg {
  width: 40px !important;
  height: 40px !important;
  margin-right: 15px;
  display: inline-block;
}
.nopadding-checkbox .v-input--selection-controls {
  padding-top: 0px;
  padding-bottom: 0px;
}
.swal2-title,
.swal2-content,
.swal2-actions button {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
h2,
h3,
h4 {
  font-weight: normal;
}
.normal-text {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 0px;
  flex: 1 1 0px;
  max-width: 100%;
  -webkit-transition: inherit;
  transition: inherit;
  font-size: 14px;
  text-align: left;
}
.popup-height {
  max-height: 500px;
  overflow-y: scroll;
}
.md-icon {
  font-size: 16px;
}
.fas {
  font-size: 18px;
}
i.material-icons {
  font-size: 18px;
}
a {
  text-decoration: none;
}
.table-actions .left-icon {
  margin-right: 20px;
}
.table-actions .fas {
  font-size: 13px;
  margin-right: 3px;
}

.attachment-image.active {
  border: 3px solid var(--v-primary-base);
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}
.attachment-image:hover img {
  transform: scale(1.1);
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}
.attachment-image {
  cursor: pointer;
  border: 3px solid #fff;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}
.display-img {
  height: 50px;
  width: auto;
}
a.del-product-image {
  position: absolute;
  right: 10px;
  top: 10px;
}
a.del-product-image:hover {
  opacity: 0.8;
}
img.table-image {
  height: auto;
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  width: 58px;
}
.table-image-h {
  width: auto;
  display: inline-block;
  vertical-align: middle;
  width: auto;
  margin-right: 10px;
  height: 40px;
}
.tooltip-btn {
  margin-right: 10px;
}
.tooltip-btn .v-btn--floating.v-btn--small {
  height: 34px;
  width: 35px;
}
.tooltip-btn .v-btn--floating.v-btn--small .v-icon {
  font-size: 14px;
}

.pop-manager {
  height: 400px;
  overflow-y: scroll;
}
.w-full {
  width: 100%;
}
.heading-offset-wrapper {
  background: #fff;
  position: relative;
  margin-top: 38px;
  text-align: left;
}
.heading-offset-20 {
  position: relative;
  top: -45px;
}
.heading-offset-wrapper .tabulardata {
  margin-top: -25px;
}
.heading-offset-wrapper .tabulardata,
.heading-offset-wrapper .heading-offset-20 {
  background: #fff;
}
.bg-white {
  background: #fff;
}
.text-white {
  color: #fff;
}
.offset-heading h2,
.offset-heading p {
  color: #fff;
  margin-bottom: 0px;
  margin-top: 0px;
}
.offset-heading {
  border-radius: 4px;
}

.v-navigation-drawer .v-list .v-list__tile__title.lh-0 {
  line-height: 14px !important;
}
.primary--text.v-list__tile--active.v-list__tile.v-list__tile--link {
  background: #fff;
}
.primary--text.v-list__tile--active.v-list__tile.v-list__tile--link .v-icon,
.primary--text.v-list__tile--active.v-list__tile.v-list__tile--link
  .v-list__tile__title {
  color: #4b4b4b;
}
.reverse-position .v-input__slot {
  flex-direction: row-reverse;
  margin-bottom: 0px !important;
}
.reverse-position .v-input__slot .v-label {
  margin-right: 15px;
}

.tbl-chekbox .v-input__slot {
  position: relative;
  top: 13px;
}
.center-title .v-toolbar__title {
  width: 100%;
}
.form-head-logo {
  max-width: 100%;
  width: 250px;
}
.bg-grey {
  background-color: #d8d8d8;
}
.min-h-80 {
  min-height: 80px;
}
.account-list:hover h2 {
  color: var(--v-primary-base);
}

.account-list .bg-grey img {
  max-width: 90%;
}
.account-list:hover .section-excerpt {
  background-color: #d8d8d8;
  transition: all 0.4s ease-in-out;
  -moz-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
}
.v-center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.bb-2 {
  border-bottom: #4b4b4b;
}
.c-layout {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.cl-flex12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
}
.cl-flex6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  min-height: 1px;
}
.cl-flex40 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
  max-width: 40%;
  position: relative;
  width: 100%;
  min-height: 1px;
}
.cl-flex70 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 60%;
  flex: 0 0 60%;
  max-width: 60%;
  position: relative;
  width: 100%;
  min-height: 1px;
}
.relative {
  position: relative;
}
.heading-with-border {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}
.heading-with-border:before {
  position: absolute;
  height: 1px;
  width: 90%;
  content: "";
  left: 0;
  right: 0;
  margin: 0 auto;
  bottom: 0;
  background-color: #4b4b4b;
}
.disable-event {
  pointer-events: none;
}
.tbl-center-content {
  display: inline-block;
  text-align: center;
  align-items: center;
}
.tbl-center-content .v-input--selection-controls__input {
  margin-right: 0;
}
.v-btn--floating.v-btn--small.xs-small {
  height: 34px;
  width: 34px;
}
.tbl-chekbox i.material-icons {
  font-size: 26px;
}
.v-btn--floating.v-btn--small.xs-small .v-icon {
  font-size: 14px;
}
.xl i.material-icons {
  font-size: 24px;
}
.primary--color {
  color: var(--v-primary-base);
}
.mt-6 {
  margin-top: 58px !important;
}
.mt-7 {
  margin-top: 68px !important;
}
.mt-8 {
  margin-top: 78px !important;
}
.input-text-center input {
  text-align: center;
}
.fa,
.fas,
.far,
.fal,
.fab,
.material-icons {
  display: inherit !important;
}
.v-table .fa,
.v-table .fas,
.v-table .far,
.v-table .fal,
.v-table .fab {
  display: inline-block !important;
}
.v-table th .material-icons {
  display: inline-block !important;
}
p.app-description {
  min-height: 22px;
}
.bulk-border {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.inline-back-button {
  position: relative;
  margin-top: -76px;
}
.search-input {
  max-width: 214px;
  margin-bottom: 20px;
  float: right;
}
.search-input-left {
  max-width: 214px;
  margin-bottom: 20px;
  float: left;
}
.tbl-chekbox.aligned-with-search {
  position: relative;
  top: 16px;
}
.bulk-checkbox .v-label {
  padding-left: 32px;
  font-size: 14px;
}
.bulk-checkbox .v-input--selection-controls__input {
  position: absolute;
}
.text-center {
  text-align: center;
}
.color--grey {
  color: #9c9c9c;
}
.offset-heading h2 {
  font-weight: 600 !important;
}
.cover-bg {
  background: #ffff;
}
.backarrow {
  position: relative;
  top: 2px;
}
.h-auto {
  height: auto !important;
}
.left-nav-item a:hover {
  color: #fff;
}
table.normal-table tr td {
  text-align: left;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
table.normal-table tr td:first-child {
  font-weight: bold;
}
.detail-img {
  height: 150px;
  width: auto;
}
a.v-list__tile.v-list__tile--link.theme--dark:hover {
  color: #333;
  background: #fff;
}
a.v-list__tile.v-list__tile--link.theme--dark:hover .theme--dark.v-icon {
  color: #333;
}
table.nested-table {
  padding-left: 25px;
  border-top: 1px solid #e4e4e4;
}
table.nested-table tr td {
  border-bottom: 1px solid #e4e4e4;
}
table.nested-table tr:last-child td {
  border-bottom: 1px solid rgba(255, 255, 255, 0);
}
.remove-hover .theme--light.v-table tbody tr:hover {
  background: rgba(255, 255, 255, 0);
}

.item-atrs .nested-table {
  padding-left: 16px;
}
.item-atrs ul {
  list-style-type: none;
  padding-left: 50px;
}
.item-atrs {
  border-top: 1px solid #e4e4e4;
}
.item-atrs ul li {
  border-bottom: 1px solid #e4e4e4;
}
.item-atrs ul li:last-child {
  border-bottom: none !important;
}
.yinherit {
  overflow-y: inherit;
}
.text-left {
  text-align: left;
}
.parent-resource .fas,
.tbl-resource .fas {
  position: relative;
  top: 2px;
  margin-right: 10px;
  position: relative;
  top: 2px;
  margin-right: 10px;
  color: var(--v-primary-base);
}
.parent-resource .fas.dark-grey {
  color: #4b4b4b;
}
.tbl-resource .fas.light-grey {
  color: #ccc;
}
.less-padding-tbl table.nested-table {
  padding-left: 5px;
}
.resource-table,
.resource-table td {
  text-align: left;
}
.resource-table input,
.resource-table select,
.resource-table .v-select__selection {
  font-size: 13px;
}
.resource-table .v-select__selection {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.tabulardata.remove-hover table tr:hover {
  background: rgba(255, 255, 255, 0) !important;
}
.top-nav-select-business .listitem a:hover,
.top-nav-select-business .listitem a:hover .theme--light.v-icon {
  color: #fff;
}
.top-nav-select-business .v-list {
  padding: 0px 0;
}
.top-nav-select-business .theme--light.v-list .v-list__group__header:hover,
.top-nav-select-business .theme--light.v-list .v-list__tile--highlighted,
.top-nav-select-business .theme--light.v-list .v-list__tile--link:hover {
  background: var(--v-primary-base);
  color: #fff;
}
.top-nav-select-business
  .theme--light.v-list
  .v-list__tile--link:hover
  .v-icon {
  color: #fff !important;
}

.hu-color-picker .colors,
.hu-color-picker .color-type {
  display: none;
}
.v-navigation-drawer .v-list .v-icon.fas,
.v-icon.fa {
  font-size: 16px !important;
}
.w-100 {
  width: 100%;
}
span.toggle-icon {
  position: absolute;
  top: 10px;
  right: 0;

  padding: 5px 11px;
  cursor: pointer;
}
span.toggle-icon:hover {
  background: #f3f3f3;
}
.permission-table td {
  position: relative;
}
span.toggle-icon.revert {
  transform: rotate(180deg);
  padding-bottom: 3px;
}
</style>
