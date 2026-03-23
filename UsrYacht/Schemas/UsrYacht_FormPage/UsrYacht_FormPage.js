define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "32910777-df5f-4491-ae77-fcc4eb9d0704",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "warn",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "view-eye-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_pokek4t",
					"control": "$PDS_UsrPrice_pokek4t",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTickerPRICE_xmwdj7a",
					"control": "$PDS_UsrTickerPRICE_xmwdj7a",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_m4ty80j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_n2rm0sv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_n2rm0sv"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_q41iosz",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_q41iosz_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_m4ty80j",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_ffk1y2q",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_gtoq2ko",
					"control": "$PDS_UsrNumber_gtoq2ko",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_gsrp1na",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassangerCount_x36tk3z",
					"control": "$PDS_UsrPassangerCount_x36tk3z",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_recqet9",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_6airb74",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_6airb74"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_orc6qj6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_orc6qj6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_recqet9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_4n364yx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_vz0ku7g",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_vz0ku7g"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_woz7cb8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_woz7cb8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4n364yx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_05bqvfz",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_zd6e1gx",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_zd6e1gx",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_mqzkwnr",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ComboBox_gaq9dyn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_6v6bk5t",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_6v6bk5t",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_xtxsxwh",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_e8v828l",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_ea4vf54",
					"control": "$PDS_UsrComment_ea4vf54",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true,
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_xtxsxwh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MultiSelectCategories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(MultiSelectCategories_label)#",
					"visible": true,
					"labelPosition": "above",
					"placeholder": "",
					"tooltip": "",
					"required": false,
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoriesStorage",
					"selectColumnName": "UsrCategory"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_obcmxt6",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_obcmxt6_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_f9yvfys",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_obcmxt6",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4n1en6g",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_f9yvfys",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_vnccfe8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_vnccfe8_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_4n1en6g",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_aaiiv8n",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_aaiiv8n_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_2fy1ojpDS"
						}
					}
				},
				"parentName": "FlexContainer_4n1en6g",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_4xm1ga9",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_4xm1ga9_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_4n1en6g",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_m3410cp",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_m3410cp_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RentalDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4xm1ga9",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_q6b4izg",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_q6b4izg_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4xm1ga9",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_p9rwb3e",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_p9rwb3e_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_p9rwb3e_GridDetail_2fy1ojp",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_2fy1ojp"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_p9rwb3e_SearchValue",
							"GridDetailSearchFilter_p9rwb3e_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_4n1en6g",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_d4pwkzh",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_obcmxt6",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RentalDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_2fy1ojp",
					"activeRow": "$GridDetail_2fy1ojp_ActiveRow",
					"selectionState": "$GridDetail_2fy1ojp_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_2fy1ojp_SelectionState"
					},
					"primaryColumnName": "GridDetail_2fy1ojpDS_Id",
					"columns": [
						{
							"id": "41c983a6-859e-5dce-8453-7ccfd39f0eae",
							"code": "GridDetail_2fy1ojpDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_2fy1ojpDS_UsrStartDate)#",
							"dataValueType": 8
						},
						{
							"id": "d371b8a8-4e2c-469f-5a76-04222542fe5b",
							"code": "GridDetail_2fy1ojpDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_2fy1ojpDS_UsrEndDate)#",
							"dataValueType": 8
						},
						{
							"id": "981d6787-4d2e-bf47-bce2-b15cea27d02f",
							"code": "GridDetail_2fy1ojpDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_2fy1ojpDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "896200e8-6280-8a6d-dfe8-3f938fccd8bd",
							"code": "GridDetail_2fy1ojpDS_UsrComment",
							"caption": "#ResourceString(GridDetail_2fy1ojpDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_d4pwkzh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2fy1ojp_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_2fy1ojpDS",
							"filters": "$GridDetail_2fy1ojp | crt.ToCollectionFilters : 'GridDetail_2fy1ojp' : $GridDetail_2fy1ojp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_2fy1ojp_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RentalDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2fy1ojp_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_2fy1ojpDS",
							"filters": "$GridDetail_2fy1ojp | crt.ToCollectionFilters : 'GridDetail_2fy1ojp' : $GridDetail_2fy1ojp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_2fy1ojp_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_2fy1ojp_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_2fy1ojp_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RentalDetail",
							"filters": "$GridDetail_2fy1ojp | crt.ToCollectionFilters : 'GridDetail_2fy1ojp' : $GridDetail_2fy1ojp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_2fy1ojp_SelectionState"
						}
					}
				},
				"parentName": "RentalDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_2fy1ojp_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_2fy1ojpDS",
							"selectionState": "$GridDetail_2fy1ojp_SelectionState"
						}
					}
				},
				"parentName": "RentalDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_2fy1ojp_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_2fy1ojpDS",
							"filters": "$GridDetail_2fy1ojp | crt.ToCollectionFilters : 'GridDetail_2fy1ojp' : $GridDetail_2fy1ojp_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_2fy1ojp_SelectionState"
						}
					}
				},
				"parentName": "RentalDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_pokek4t": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 200,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_n2rm0sv": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_n2rm0sv_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_vz0ku7g": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_vz0ku7g_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrPassangerCount_x36tk3z": {
						"modelConfig": {
							"path": "PDS.UsrPassangerCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(CountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrComment_ea4vf54": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrStatus_6airb74": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_6airb74_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrNumber_gtoq2ko": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_zd6e1gx": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_zd6e1gx_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCity_6v6bk5t": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_6v6bk5t_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrTickerPRICE_xmwdj7a": {
						"modelConfig": {
							"path": "PDS.UsrTickerPRICE"
						}
					},
					"PDS_UsrManagerEmail_mqzkwnr": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_mqzkwnr"
						}
					},
					"GridDetail_2fy1ojp": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_2fy1ojpDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_p9rwb3e_GridDetail_2fy1ojp",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_2fy1ojp_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_2fy1ojpDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_2fy1ojpDS.UsrStartDate"
									}
								},
								"GridDetail_2fy1ojpDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_2fy1ojpDS.UsrEndDate"
									}
								},
								"GridDetail_2fy1ojpDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_2fy1ojpDS.CreatedOn"
									}
								},
								"GridDetail_2fy1ojpDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_2fy1ojpDS.UsrComment"
									}
								},
								"GridDetail_2fy1ojpDS_Id": {
									"modelConfig": {
										"path": "GridDetail_2fy1ojpDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_2fy1ojp_PredefinedFilter": {
						"value": null
					},
					"MultiSelectCategories_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_2fy1ojpDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_mqzkwnr": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_2fy1ojpDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[ 
            {
                request: "usr.PushButtonRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    console.log("Button works...");
                    Terrasoft.showInformation("My button was pressed.");
                    var price = await request.$context.PDS_UsrPrice_pokek4t;
                    console.log("Price = " + price);
                    request.$context.PDS_UsrComment_ea4vf54 = "comment from JS code!";
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
            }
        },
            {
                request: "crt.HandleViewModelAttributeChangeRequest",
                /* The custom implementation of the system query handler. */
                handler: async (request, next) => {
                      if (request.attributeName === 'PDS_UsrPrice_pokek4t' ||                 // if price changed
                       request.attributeName === 'PDS_UsrPassangerCount_x36tk3z' ) {         // or Passenger count changed
                        let price = await request.$context.PDS_UsrPrice_pokek4t;
                        let passengers = await request.$context.PDS_UsrPassangerCount_x36tk3z;
                        let ticket_price = price / passengers;
                        request.$context.PDS_UsrTickerPRICE_xmwdj7a = ticket_price;
                    }
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                }
            }
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
            "usr.DGValidator": {
    validator: function (config) {
        return function (control) {
            let value = control.value;
            let minValue = config.minValue;
            let valueIsCorrect = value >= minValue;
            var result;
            if (valueIsCorrect) {
                result = null;
            } else {
                result = {
                    "usr.DGValidator": { 
                        message: config.message
                    }
                };
            }
            return result;
        };
    },
    params: [
        { name: "minValue" },
        { name: "message" }
    ],
    async: false
}
        }/**SCHEMA_VALIDATORS*/
	};
});