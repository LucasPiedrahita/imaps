/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import React, { useEffect, useRef, useState } from 'react';
import { getInitialSettings } from './utils/sketch';
//import { fonts } from './utils/fonts';
export const SketchSettings = (props: any) => {
  const [geometryType, setGeometryType] = useState(null);
  const ref = useRef<HTMLDivElement>(null);
  //const family = useRef<HTMLDivElement>(null);
  //const [selectedFont, setSelectedFont] = useState<any>();
  const settings = useRef(getInitialSettings());
  // const [settings, setSettings] = useState<any>(() => {
  //     const initialSettings = getInitialSettings();
  //     return initialSettings;
  // });
  const sliderChanged = (event: any) => {
    const attribute = (event.target as HTMLElement).getAttribute('name');
    if (attribute) {
      settings.current = { ...settings.current, ...{ [attribute]: parseFloat(event.target.value) } };
      requestAnimationFrame(() => {
        props.settingsChanged(settings.current);
      });
    }
  };
  const colorChanged = (event: any) => {
    const attribute = (event.target as HTMLElement).getAttribute('name');
    if (attribute) {
      settings.current = { ...settings.current, ...{ [attribute]: event.target.value } };
      requestAnimationFrame(() => {
        props.settingsChanged(settings.current);
      });
    }
  };
  const switchChanged = (event: any) => {
    const attribute = (event.target as HTMLElement).getAttribute('name');
    if (attribute) {
      settings.current = { ...settings.current, ...{ [attribute]: (event as any).detail.switched } };
      requestAnimationFrame(() => {
        props.settingsChanged(settings.current);
      });
    }
  };

  useEffect(() => {
    setGeometryType(props.geometryType);

    requestAnimationFrame(() => {
      // if (props.geometryType === 'text') {
      //   const font = fonts.find((font) => {
      //     return font.active;
      //   });
      //   setSelectedFont(font);

      //   family.current?.addEventListener('calciteDropdownSelect', (e) => {
      //     requestAnimationFrame(() => {
      //       const item = family.current?.querySelector('calcite-dropdown-item[active]');

      //       if (item) {
      //         const selected = fonts.find((font) => {
      //           return font.name === item.innerHTML;
      //         });
      //         const active = fonts.find((font) => {
      //           return font.active;
      //         }) as any;
      //         if (active) {
      //           active.selected = false;
      //         }
      //         if (selected) {
      //           selected.active = true;
      //         }
      //         console.log(selected);
      //         setSelectedFont(selected);
      //         settings.current = {
      //           ...settings.current,
      //           ...{
      //             fontFamily: selected?.font.family,
      //             fontStyle: selected?.font.style,
      //             fontWeight: selected?.font.weight,
      //           },
      //         };
      //         props.settingsChanged(settings.current);
      //       }
      //     });
      //   });
      // } else {
      //   family.current?.removeEventListener('calciteDropdownSelect', (e) => {
      //     console.log(e);
      //   });
      // }
      ref.current?.querySelectorAll('calcite-slider').forEach((element: Element) => {
        element.addEventListener('calciteSliderChange', sliderChanged);
      });
      ref.current?.querySelectorAll('calcite-color-picker').forEach((element: Element) => {
        element.addEventListener('calciteColorPickerChange', colorChanged);
      });
      ref.current?.querySelectorAll('calcite-switch').forEach((element: Element) => {
        element.addEventListener('calciteSwitchChange', switchChanged);
      });
    });

    return () => {
      ref.current?.querySelectorAll('calcite-slider').forEach((slider: Element) => {
        slider.removeEventListener('calciteSliderChange', sliderChanged);
      });
      ref.current?.querySelectorAll('calcite-slider').forEach((picker: Element) => {
        picker.removeEventListener('calciteColorPickerChange', colorChanged);
      });
      ref.current?.querySelectorAll('calcite-switch').forEach((element: Element) => {
        element.addEventListener('calciteSwitchChange', switchChanged);
      });
    };
  }, [props.geometryType]);
  return (
    <div ref={ref} className="panel">
      {geometryType === 'point' ? (
        <div>
          <calcite-block key="point-symbol" heading="Symbol" open collapsible>
            <calcite-block-section text="Size">
              <calcite-slider
                min="0"
                max="30"
                value={settings.current.pointSize}
                step="0.1"
                label="Size"
                label-handles=""
                ticks="0"
                page-step="5"
                name="pointSize"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
          </calcite-block>
          <calcite-block key="point-fill" heading="Fill" open collapsible>
            <calcite-label
              layout="inline-space-between"
              class="sc-calcite-label-h sc-calcite-label-s"
              dir="ltr"
              alignment="start"
              status="idle"
              scale="m"
              calcite-hydrated=""
            >
              <label className="sc-calcite-label-h sc-calcite-label-s sc-calcite-label">
                Enable fill
                <calcite-switch
                  name="pointFillEnabled"
                  value="enabled"
                  switched={settings.current.pointFillEnabled}
                  bind={this}
                  aria-checked="true"
                  dir="ltr"
                  tabindex="0"
                  scale="m"
                  calcite-hydrated=""
                ></calcite-switch>
              </label>
            </calcite-label>
            {settings.current.pointFillEnabled ? (
              <div>
                <calcite-block-section key="point-fill-color" text="Color">
                  <calcite-color-picker
                    dir="ltr"
                    hide-channels=""
                    hide-saved=""
                    scale="m"
                    value={settings.current.pointFillColor}
                    appearance="default"
                    name="pointFillColor"
                    calcite-hydrated=""
                    id="pointFill"
                  ></calcite-color-picker>
                </calcite-block-section>
                <calcite-block-section key="point-fill-transparency" text="Fill transparency">
                  <calcite-slider
                    min="0"
                    max="1"
                    value={settings.current.pointFillOpacity}
                    bind={this}
                    step="0.1"
                    label="Opacity"
                    label-handles=""
                    ticks="0"
                    page-step="5"
                    name="fill-opacity"
                    id="pointFillOpacity"
                    snap=""
                  ></calcite-slider>
                </calcite-block-section>{' '}
              </div>
            ) : (
              ''
            )}
          </calcite-block>
          <calcite-block key="outline" heading="Outline" open collapsible>
            <calcite-block-section text="Color">
              <calcite-color-picker
                dir="ltr"
                hide-channels=""
                hide-saved=""
                scale="m"
                value={settings.current.pointOutlineColor}
                appearance="default"
                name="pointOutlineColor"
                calcite-hydrated=""
              ></calcite-color-picker>
            </calcite-block-section>
            <calcite-block-section text="Outline transparency">
              <calcite-slider
                min="0"
                max="1"
                value={settings.current.pointOutlineOpacity}
                bind={this}
                step="0.1"
                label="Opacity"
                label-handles=""
                ticks="0"
                page-step="5"
                name="pointOutlineOpacity"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
            <calcite-block-section text="Stroke">
              <calcite-slider
                min="0"
                max="10"
                value={settings.current.pointOutlineWidth}
                step="0.1"
                label="Width"
                label-handles=""
                ticks="0"
                page-step="5"
                name="pointOutlineWidth"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
          </calcite-block>
        </div>
      ) : (
        ''
      )}
      {geometryType === 'polyline' ? (
        <div>
          <calcite-block key="line" heading="Line" open collapsible>
            <calcite-block-section text="Color">
              <calcite-color-picker
                dir="ltr"
                hide-channels=""
                hide-saved=""
                scale="m"
                value={settings.current.lineColor}
                appearance="default"
                name="lineColor"
                calcite-hydrated=""
              ></calcite-color-picker>
            </calcite-block-section>

            <calcite-block-section text="Line transparency">
              <calcite-slider
                min="0"
                max="1"
                value={settings.current.lineOutlineOpacity}
                bind={this}
                step="0.1"
                label="Opacity"
                label-handles=""
                ticks="0"
                page-step="5"
                name="lineOutlineOpacity"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
            <calcite-block-section text="Stroke">
              <calcite-slider
                min="0"
                max="10"
                value={settings.current.lineWidth}
                bind={this}
                step="0.1"
                label="Width"
                label-handles=""
                ticks="0"
                page-step="5"
                name="lineWidth"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
          </calcite-block>
        </div>
      ) : (
        ''
      )}
      {geometryType === 'polygon' ? (
        <div>
          <calcite-block key="polygon-fill" heading="Fill" open collapsible>
            <calcite-label
              layout="inline-space-between"
              class="sc-calcite-label-h sc-calcite-label-s"
              dir="ltr"
              alignment="start"
              status="idle"
              scale="m"
              calcite-hydrated=""
            >
              <label className="sc-calcite-label-h sc-calcite-label-s sc-calcite-label">
                Enable fill
                <calcite-switch
                  name="polygonFillEnabled"
                  value="enabled"
                  switched={settings.current.polygonFillEnabled}
                  bind={this}
                  aria-checked="true"
                  dir="ltr"
                  tabindex="0"
                  scale="m"
                  calcite-hydrated=""
                ></calcite-switch>
              </label>
            </calcite-label>
            {settings.current.polygonFillEnabled ? (
              <div>
                <calcite-block-section key="polygon-fill-color" text="Color">
                  <calcite-color-picker
                    dir="ltr"
                    hide-channels=""
                    hide-saved=""
                    scale="m"
                    value={settings.current.polygonFillColor}
                    appearance="default"
                    name="polygonFillColor"
                    calcite-hydrated=""
                  ></calcite-color-picker>
                </calcite-block-section>
                <calcite-block-section key="polygon-fill-transparency" text="Fill transparency">
                  <calcite-slider
                    min="0"
                    max="1"
                    value={settings.current.polygonFillOpacity}
                    bind={this}
                    step="0.1"
                    label="Opacity"
                    label-handles=""
                    ticks="0"
                    page-step="5"
                    name="polygonFillOpacity"
                    snap=""
                  ></calcite-slider>
                </calcite-block-section>
              </div>
            ) : (
              ''
            )}
          </calcite-block>
          <calcite-block key="outline" heading="Outline" open collapsible>
            <calcite-block-section text="Color">
              <calcite-color-picker
                dir="ltr"
                hide-channels=""
                hide-saved=""
                scale="m"
                value={settings.current.polygonOutlineColor}
                appearance="default"
                name="polygonOutlineColor"
                calcite-hydrated=""
              ></calcite-color-picker>
            </calcite-block-section>
            <calcite-block-section text="Outline transparency">
              <calcite-slider
                min="0"
                max="1"
                value={settings.current.polygonOutlineOpacity}
                bind={this}
                step="0.1"
                label="Opacity"
                label-handles=""
                ticks="0"
                page-step="5"
                name="polygonOutlineOpacity"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
            <calcite-block-section text="Stroke">
              <calcite-slider
                min="0"
                max="10"
                value={settings.current.polygonOutlineWidth}
                bind={this}
                step="0.1"
                label="Width"
                label-handles=""
                ticks="0"
                page-step="5"
                name="polygonOutlineWidth"
                snap=""
              ></calcite-slider>
            </calcite-block-section>
          </calcite-block>
        </div>
      ) : (
        ''
      )}
      {geometryType === 'text' ? (
        <div>
          <calcite-block key="text-symbol" heading="Symbol" open collapsible>
            {/* <calcite-block-section key="font-color" text="Font Family" open>
              <calcite-dropdown ref={family} label="Dropdown label">
                <calcite-button slot="dropdown-trigger" color="clear">
                  {selectedFont?.name}
                </calcite-button>
                <calcite-dropdown-group>
                  {fonts.map((font: any) => {
                    return <calcite-dropdown-item key={font.name}>{font.name}</calcite-dropdown-item>;
                  })}
                </calcite-dropdown-group>
              </calcite-dropdown>
            </calcite-block-section> */}
            <calcite-block-section text="Font Size" open>
              <calcite-slider
                min="6"
                max="30"
                value={settings.current.fontSize}
                step="1"
                label="Size"
                label-handles=""
                ticks="0"
                page-step="5"
                name="fontSize"
                snap=""
              ></calcite-slider>
            </calcite-block-section>

            <calcite-block-section key="font-color" text="Font Color" open>
              <calcite-label>
                Font Color
                <calcite-color-picker
                  dir="ltr"
                  hide-channels=""
                  hide-saved=""
                  scale="m"
                  value={settings.current.fontColor}
                  appearance="default"
                  name="fontColor"
                  calcite-hydrated=""
                  id="fontColor"
                ></calcite-color-picker>
              </calcite-label>
            </calcite-block-section>
          </calcite-block>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
